<script lang="ts">
	export let imgUrl: string;
</script>

<div
	class="flex w-80 flex-col justify-between gap-0 rounded-xl border-[0.5px] border-solid border-[#D0D5DD] p-0"
>
	<img src={imgUrl} alt={imgUrl} class="h-32 w-80 rounded-t-xl object-cover" />
	<div class="m-6 bg-white">
		<div class="text-sm font-normal leading-[150%] text-[#141618]">
			<slot />
		</div>
	</div>
</div>
