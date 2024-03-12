<script lang="ts">
	export let textAlign: string = 'right';
	export let className: string = '';
</script>

<div class={`text-xs font-normal leading-4 text-${textAlign} text-nowrap text-[#7A9299] flex flex-row ${className}`}>
	<slot />
</div>
