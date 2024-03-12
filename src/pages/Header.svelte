<script lang="ts">
	 import { Button } from "$lib/components/ui/button";
	import NavBar, { type NavLinkInfo } from '../components/NavBar.svelte';
	import UserAcctDropDown from "./UserAcctDropDown.svelte";

	const links: NavLinkInfo[] = [
		{
			iconSrc: 'assets/home-icon.png',
			iconAltText: 'home-icon',
			href: '/',
			title: 'Home'
		},
		{
			iconSrc: 'assets/explore-icon.png',
			iconAltText: 'explore-icon',
			href: '/',
			title: 'Explore'
		},
		{
			iconSrc: 'assets/learn-icon.png',
			iconAltText: 'learn-icon',
			href: '/',
			title: 'Learn'
		}
	];
</script>

<header
	class="flex flex-row flex-wrap content-start items-center justify-between gap-y-2.5 border-b border-dotted border-b-[#525C69] px-0 pb-0 pt-2.5"
>
	<div class="flex flex-row items-center gap-1 px-0 flex-1">
		<div class="order-1 aspect-square w-7 flex-none grow-0">
			<img src="/assets/duggle-logo.png" alt="duggle-logo" />
		</div>
		<div class="order-1 flex-none grow-0 text-[1.75rem] text-[#333]">duggup</div>
	</div>
	<div class="flex flex-row items-center justify-between gap-10 py-2.5">
		<NavBar {links}></NavBar>
		<Button variant="outline" class="shadow-[0px_4px_0px_#4D4D4D] border-[#4D4D4D]">
			<div class="flex flex-row px-4 items-center">
				<i class="fa-regular fa-square-plus text-[#4D4D4D] px-1"></i>
				<div class="px-2 not-italic font-normal text-sm leading-5 capitalize text-[#4D4D4D]">Post</div>
			</div>		
		</Button>
		
		<UserAcctDropDown />
	</div>
</header>
