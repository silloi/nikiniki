<script lang="ts">
	import { createTimestampLabel } from '$lib/time';

	export let created_at = '';
	export let content = '';
</script>

<dl>
	<dt class="timestamp">
		{createTimestampLabel(new Date(created_at))}
	</dt>
	<dd class="content">
		{content}
	</dd>
</dl>

<style>
	dl {
		display: flex;
	}

	.timestamp {
		width: 3.5rem;
	}

	.content {
		margin: 0;
	}
</style>
