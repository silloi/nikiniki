<script lang="ts">
	import InputForm from './InputForm.svelte';
	import TimeLine from './TimeLine.svelte';

	export let data;

	let content = '';

	let loadedData: any[] | null = [];
	async function loadData() {
		const { data: result } = await data.supabase
			.from('times')
			.select('*')
			.limit(20)
			.order('created_at', { ascending: false });
		loadedData = result;
	}

	$: if (data.session) {
		loadData();
	}
</script>

<main>
	<section class="timeline">
		<!-- <p>client-side data fetching with RLS</p> -->
		{#if data.session}
			{#each loadedData as row}
				<TimeLine created_at={row.created_at} content={row.content} />
			{/each}
		{/if}
	</section>

	<InputForm bind:content />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.timeline {
		display: flex;
		flex-direction: column-reverse;
		overflow-y: scroll;
		flex: 1;
	}
</style>
