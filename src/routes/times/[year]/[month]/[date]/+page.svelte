<script lang="ts">
	import TimeLine from '../../../TimeLine.svelte';

	export let data;

	let { user, tableData } = data;
	$: ({ user, tableData } = data);
</script>

{#if data.session}
	{#if tableData}
		<p>client-side data fetching with RLS</p>
		{#each tableData as row}
			<TimeLine created_at={row.created_at} content={row.content} />
		{/each}
	{/if}
{/if}
