<script lang="ts">
	export let created_at = '';
	export let content = '';
</script>

<dl>
	<dt>
		{new Date(created_at).toLocaleString().slice(-8, -3)}
	</dt>
	<dd>
		{content}
	</dd>
</dl>

<style>
	dl {
		display: flex;
	}
</style>
