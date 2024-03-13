<script lang="ts">
	import AppButton from '../components/AppButton.svelte';

	import { Button } from '$lib/components/ui/button';
	import NavBar, { type NavLinkInfo } from '../components/NavBar.svelte';
	import UserAcctDropDown from './UserAcctDropDown.svelte';
	import { SquarePlus } from 'lucide-svelte';

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
	class="fixed top-0 z-10 mx-auto flex w-full max-w-[1424px] flex-row flex-wrap content-start items-center justify-between gap-y-2.5 border-b border-dotted border-b-[#525C69] bg-[#FCFCFF] px-2 pb-0 pt-2.5"
>
	<div class="flex flex-1 flex-row items-center gap-1">
		<div class="aspect-square w-7">
			<img src="/assets/duggle-logo.png" alt="duggle-logo" />
		</div>
		<div class="text-[1.75rem] text-[#333]">duggup</div>
	</div>
	<div class="flex flex-row items-center justify-between gap-5 py-2.5">
		<NavBar {links}></NavBar>
		<AppButton>
			<SquarePlus slot="prefix-icon" color="#4D4D4D" strokeWidth={1.5} size={16} />
			Post
		</AppButton>

		<UserAcctDropDown />
	</div>
</header>
