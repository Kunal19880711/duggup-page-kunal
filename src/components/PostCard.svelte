<script context="module" lang="ts">
	export interface Post {
		imgUrl: string;
		content: string;
	}
</script>

<script lang="ts">
	export let post: Post;
</script>

<div
	class="flex w-80 flex-col justify-between gap-0 rounded-xl border-[0.5px] border-solid border-[#D0D5DD] p-0"
>
	<img src={post.imgUrl} alt={post.imgUrl} class="h-32 w-80 rounded-t-xl object-cover" />
	<div class="m-6 bg-white">
		<div class="text-sm font-normal leading-[150%] text-[#141618]">
			{post.content}
		</div>
	</div>
</div>
