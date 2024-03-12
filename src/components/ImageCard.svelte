<script lang="ts">
	export let imgUrl: string;
</script>

<div class="flex w-80 flex-col gap-0 justify-between border-[0.5px] border-solid border-[#D0D5DD] p-0">
	<img src={imgUrl} alt={imgUrl} class="object-cover h-32 w-80 rounded-t-xl" />
	<div class="m-6">
		<div class="text-sm font-normal leading-[150%] text-[#141618]">
			<slot />
		</div>
	</div>
</div>
