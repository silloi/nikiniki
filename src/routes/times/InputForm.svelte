<script lang="ts">
	import { enhance } from '$app/forms';

	export let content = '';
</script>

<form method="POST" action="?/createPost" use:enhance>
	<input type="text" name="content" bind:value={content} />
	<button>Post</button>
</form>
