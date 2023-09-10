<script lang="ts">
	import { createTimestampLabel } from '$lib/time';

	export let timestamp = new Date();
</script>

<code>
	{createTimestampLabel(new Date(timestamp))}
</code>
