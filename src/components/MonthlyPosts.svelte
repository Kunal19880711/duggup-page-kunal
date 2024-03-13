<script context="module" lang="ts">
	import type { Post } from './PostCard.svelte';
	import TimelineRow from './TimelineRow.svelte';

	export interface MonthlyPostsData {
		month: string;
		posts: Post[];
	}
</script>

<script lang="ts">
	import PortCardList from './PortCardList.svelte';
	import LabelText from './LabelText.svelte';

	export let monthlyPosts: MonthlyPostsData;
</script>

<TimelineRow>
	<div slot="left">
		<LabelText className="pt-4">{monthlyPosts.month}</LabelText>
	</div>
	<div slot="timeline" class="absolute -right-2 top-[50%]">
		<div class="h-4 w-4 rounded-full border-[3px] border-[#0066FF] bg-white"></div>
	</div>
	<div slot="center" class="flex gap-9">
		<PortCardList posts={monthlyPosts.posts} />
	</div>
</TimelineRow>
