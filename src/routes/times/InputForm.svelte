<script lang="ts">
	import { enhance } from '$app/forms';
	import { createTimestampLabel } from '$lib/time';

	export let content = '';

	const now = new Date();
</script>

<form method="POST" action="?/createPost" use:enhance>
	<span class="timestamp">{createTimestampLabel(now)}</span>
	<input type="text" name="content" bind:value={content} />
	<button>Post</button>
</form>

<style>
	form {
		margin: 16px 0;
	}

	.timestamp {
		width: 3.5rem;
	}
</style>
