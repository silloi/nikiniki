import { error, redirect } from '@sveltejs/kit';

export const load = async ({ params, parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}

	const dateRegex = new RegExp(/\d{4}-?\d\d-?\d\d/, 'g');
	if (dateRegex.test(`${params.year}-${params.month}-${params.date}`) === false) {
		throw error(400, { message: 'Invalid date' });
	}

	const { data: tableData } = await supabase
		.from('times')
		.select('*')
		.gte('created_at', `${params.year}-${params.month}-${params.date}:00:00:00`)
		.lte('created_at', `${params.year}-${params.month}-${params.date}:23:59:59`);

	return {
		user: session.user,
		tableData
	};
};
