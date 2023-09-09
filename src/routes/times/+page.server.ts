import { error, fail } from '@sveltejs/kit';

export const actions = {
	createTime: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (!session) {
			// the user is not signed in
			throw error(401, { message: 'Unauthorized' });
		}
		// we are save, let the user create the time
		const formData = await request.formData();
		const content = formData.get('content') as string;

		const { error: createTimeError, data: newTime } = await supabase
			.from('times')
			.insert({ user_id: session.user.id, content });

		if (createTimeError) {
			return fail(500, {
				supabaseErrorMessage: createTimeError.message
			});
		}
		return {
			newTime
		};
	}
};
