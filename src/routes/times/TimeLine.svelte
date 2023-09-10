<script lang="ts">
	export let created_at = '';
	export let content = '';
</script>

<dl>
	<dt class="timestamp">
		{new Date(created_at).toLocaleString().slice(-8, -3)}
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
