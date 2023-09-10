<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from './Header.svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<div class="layout">
	<div class="side">
		<Header />
	</div>

	<div class="center">
		<slot />
	</div>
</div>

<style>
	.layout {
		display: flex;
	}

	.side {
		width: 12rem;
	}

	.center {
		width: 100%;
	}
</style>
