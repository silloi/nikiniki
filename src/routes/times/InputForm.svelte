<script lang="ts">
	import { enhance } from '$app/forms';
	import { createTimestampLabel } from '$lib/time';
	import Timestamp from './Timestamp.svelte';

	export let content = '';

	const now = new Date();
</script>

<form method="POST" action="?/createPost" use:enhance>
	<span class="timestamp">
		<Timestamp timestamp={now} />
	</span>
	<input type="text" name="content" bind:value={content} />
	<button>Post</button>
</form>

<style>
	form {
		margin: 0.5rem 0;
	}

	.timestamp {
		width: 3rem;
	}
</style>
