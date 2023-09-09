<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;

	let content = '';

	let loadedData: any[] | null = [];
	async function loadData() {
		const { data: result } = await data.supabase.from('times').select('*').limit(20);
		loadedData = result;
	}

	$: if (data.session) {
		loadData();
	}
</script>

<form method="POST" action="?/createPost" use:enhance>
	<input type="text" name="content" bind:value={content} />
	<button>Post</button>
</form>

{#if data.session}
	<p>client-side data fetching with RLS</p>
	<pre>{JSON.stringify(loadedData, null, 2)}</pre>
{/if}
