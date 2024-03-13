<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let isActive: boolean = false;
	let shadowClass = isActive ? 'shadow-[0px_2px_0px_#4D4D4D]' : 'shadow-[0px_4px_0px_#4D4D4D]';
</script>

<Button
	variant="outline"
	class={`color-[#4D4D4D] border-[0.5px] border-solid  border-[#4D4D4D] text-[#4D4D4D] ${shadowClass} hover:border-[#0066FF] hover:bg-[#0066FF] hover:text-white hover:shadow-[0px_2px_0px_#003A91]`}
	on:click
>
	<div class="flex flex-row items-center">
		<slot name="prefix-icon"><!-- optional fallback --></slot>
		<div class="px-2 text-sm font-normal capitalize not-italic leading-5">
			<slot />
		</div>
		<slot name="suffix-icon"><!-- optional fallback --></slot>
	</div>
</Button>
