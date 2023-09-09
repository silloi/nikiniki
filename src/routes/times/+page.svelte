<script lang="ts">
	export let data;

	let loadedData: any[] | null = [];
	async function loadData() {
		const { data: result } = await data.supabase.from('times').select('*').limit(20);
		loadedData = result;
	}

	$: if (data.session) {
		loadData();
	}
</script>

{#if data.session}
	<p>client-side data fetching with RLS</p>
	<pre>{JSON.stringify(loadedData, null, 2)}</pre>
{/if}
