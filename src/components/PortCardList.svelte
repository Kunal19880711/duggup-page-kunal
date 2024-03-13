<script lang="ts">
	import PostCard, { type Post } from './PostCard.svelte';

	export let posts: Post[];
   
</script>

{#each posts as post}
	<PostCard {post} />
{/each}
