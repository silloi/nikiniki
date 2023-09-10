<script lang="ts">
	import { createTimestampLabel } from '$lib/time';
	import Timestamp from './Timestamp.svelte';

	export let created_at = '';
	export let content = '';
</script>

<dl>
	<dt class="timestamp">
		<Timestamp timestamp={new Date(created_at)} />
	</dt>
	<dd class="content">
		{content}
	</dd>
</dl>

<style>
	dl {
		display: flex;
		margin: 0.5rem 0;
	}

	.timestamp {
		width: 3rem;
		flex: auto 0;
	}

	.content {
		margin: 0;
		flex: 1;
	}
</style>
