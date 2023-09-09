<script lang="ts">
	import { createDatePath } from '$lib/date';

	const today = new Date();
	const thisYear = today.getFullYear();
	const thisMonth = today.getMonth();
	const thisDate = today.getDate();
	const thisDay = today.getDay();

	const thisMonday = new Date(thisYear, thisMonth, thisDate - thisDay + 1);

	const thisWeekString = [...Array(7).keys()].map((i) => {
		const date = new Date(thisMonday);
		date.setDate(date.getDate() + i);

		return createDatePath(date.getFullYear(), date.getMonth(), date.getDate());
	});
</script>

<ul>
	{#each thisWeekString as date}
		<li>
			<a href="/times/{date}">{date}</a>
		</li>
	{/each}
</ul>
