<script lang="ts">
	export let useFullLength: boolean = false;
</script>

<div class="relative self-center">
	<div class="py-6 flex-left flex min-h-40 items-center justify-end pr-10">
		<slot name="left"><!-- optional fallback --></slot>
	</div>
	<slot name="timeline"><!-- optional fallback --></slot>
</div>
<div
	class={'py-6 justify-right flex min-h-40 items-center border-l border-dotted border-l-[#778FB1] pl-10 self-center ' +
		(useFullLength ? 'col-start-2 col-end-4' : '')}
>
	<slot name="center"><!-- optional fallback --></slot>
</div>
{#if !useFullLength}
	<div></div>
{/if}
