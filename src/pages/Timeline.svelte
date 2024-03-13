<script lang="ts">
	import RoleChangePost from '../components/RoleChangePost.svelte';
	import PersonInfo from '../components/PersonInfo.svelte';
	import MonthlyPosts from '../components/MonthlyPosts.svelte';
	import TimelineContainer from '../components/TimelineContainer.svelte';

	import { person, feeds, FeedType } from './data';
</script>

<TimelineContainer>
	<PersonInfo {person} />
	{#each feeds as feed}
		{#if feed.type === FeedType.MonthlyPosts}
			<MonthlyPosts monthlyPosts={feed.monthlyPosts} />
		{:else if feed.type === FeedType.RoleChange}
			<RoleChangePost roleChangePost={feed.roleChangePost} />
		{/if}
	{/each}
</TimelineContainer>
