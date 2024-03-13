<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import NavBar, { type NavLinkInfo } from '../components/NavBar.svelte';
	import UserAcctDropDown from './UserAcctDropDown.svelte';

	const links: NavLinkInfo[] = [
		{
			iconSrc: 'assets/home-icon.png',
			href: '/',
			title: 'Home'
		},
		{
			iconSrc: 'assets/explore-icon.png',
			href: '/',
			title: 'Explore'
		},
		{
			iconSrc: 'assets/learn-icon.png',
			href: '/',
			title: 'Learn'
		}
	];
</script>

<header
	class="flex flex-row flex-wrap content-start items-center justify-between gap-y-2.5 border-b border-dotted border-b-[#525C69] pb-0 pt-2.5 fixed w-full max-w-[1424px] mx-auto px-2 top-0 z-10 bg-[#FCFCFF]"
>
	<div class="flex flex-1 flex-row items-center gap-1">
		<div class="aspect-square w-7">
			<img src="/assets/duggle-logo.png" alt="duggle-logo" />
		</div>
		<div class="text-[1.75rem] text-[#333]">duggup</div>
	</div>
	<div class="flex flex-row items-center justify-between gap-5 py-2.5">
		<NavBar {links}></NavBar>
		<Button variant="outline" class="border-[#4D4D4D] shadow-[0px_4px_0px_#4D4D4D]">
			<div class="flex flex-row items-center">
				<i class="fa-regular fa-square-plus pr-1 text-[#4D4D4D]"></i>
				<div class="px-2 text-sm font-normal capitalize not-italic leading-5 text-[#4D4D4D]">
					Post
				</div>
			</div>
		</Button>

		<UserAcctDropDown />
	</div>
</header>
