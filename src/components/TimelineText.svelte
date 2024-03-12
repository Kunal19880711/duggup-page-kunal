<script lang="ts">
    export let textAlign: string = 'right';
</script>

<div class={`font-normal text-xs leading-4 text-${textAlign} text-[#7A9299]`}>
    <slot/>
</div>