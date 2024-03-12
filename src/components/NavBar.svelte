<script lang="ts" context="module">
    export interface NavLinkInfo {
        iconSrc: string;
        href: string;
        title: string; 
    } 
</script>

<script lang="ts">
    export let links:NavLinkInfo[];
</script>

<nav class="flex flex-row items-center justify-between gap-0">
    {#each links as link}
    <a class="flex flex-row items-center justify-around px-4 py-1" href={link.href}>
		<div class="px-1">
			<div class="h-4 w-4 pb-0.5">
				<img src={link.iconSrc} alt={link.iconSrc} />
			</div>
		</div>
		<div class="p-2 not-italic font-normal text-sm leading-5 capitalize text-[#4D4D4D]">{link.title}</div>
	</a>
    {/each}
</nav>
