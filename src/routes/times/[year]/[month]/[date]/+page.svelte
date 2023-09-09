<script lang="ts">
	export let data;

	let { user, tableData } = data;
	$: ({ user, tableData } = data);
</script>

{#if data.session}
	{#if tableData}
		{#each tableData as row}
			<p>client-side data fetching with RLS</p>
			<pre>{JSON.stringify(row, null, 2)}</pre>
		{/each}
	{/if}
{/if}
