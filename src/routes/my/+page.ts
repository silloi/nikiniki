import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { supabase, session } = await parent();
	if (!session) {
		throw redirect(303, '/');
	}
	const { data: tableData } = await supabase.from('times').select('*');

	return {
		user: session.user,
		tableData
	};
};
