<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" class="border-[#4D4D4D] shadow-[0px_4px_0px_#4D4D4D]">
			<div class="flex flex-row items-center">
				
				<slot name="prefix-icon"><!-- optional fallback --></slot>
				<div class="px-2 text-sm font-normal capitalize not-italic leading-5 text-[#4D4D4D]">
					<slot />
				</div>
				<slot name="suffix-icon"><!-- optional fallback --></slot>
			</div>
		</Button>

