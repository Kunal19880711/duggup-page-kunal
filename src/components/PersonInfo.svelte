<script context="module" lang="ts">
	export interface Person {
		name: string;
		imgUrl: string;
		about: string;
		company: string;
		position: string;
	}
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import { isFollowed } from '../store';

	import TimelineRow from './TimelineRow.svelte';
	import LabelText from './LabelText.svelte';
	import AppButton from './AppButton.svelte';

	export let person: Person;
</script>

<TimelineRow useFullLength={true}>
	<div slot="timeline" class="absolute -right-12 -top-3">
		<div class="flex flex-col items-center gap-3 bg-white">
			<div class="box-border h-24 w-24 rounded-full border-[0.5px] border-solid border-[#4D4D4D]">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={person.imgUrl}
					alt={person.imgUrl}
					class="rounded-full pl-0.5 pt-0.5"
				/>
			</div>
			<div class="w-24 text-center text-2xl font-bold not-italic leading-7 text-[#4B5C6D]">
				{person.name}
			</div>
		</div>
	</div>
	<div slot="center">
		<div class="flex flex-col gap-5 pl-10">
			<div class="flex flex-row justify-between">
				<div class="basis-8/12 text-sm font-normal leading-6 text-[#141618]">
					{person.about}
				</div>
				<div class="flex min-w-20 flex-col items-end justify-end">
					<div class="flex h-9 w-9">
						<img src="assets/duggle-logo.png" alt="duggle-logo" class="rounded-full" />
					</div>
					<div class="text-right text-base font-bold leading-5 text-[#141618]">{person.company}</div>
					<LabelText>{person.position}</LabelText>
				</div>
			</div>
			<div class="flex flex-row justify-between">
				<AppButton isActive={$isFollowed} on:click={() => ($isFollowed = true)}>
					{#if $isFollowed}
						Followed
					{:else}
						Follow
					{/if}
				</AppButton>
				<div class="flex justify-end">
					<Button
						variant="link"
						class="flex flex-row gap-1 text-sm font-normal leading-5 text-[#4D4D4D]"
					>
						<span class="">My website</span>
						<ExternalLink class="color-[#4D4D4D] h-4 w-4" />
					</Button>
					<div class="flex flex-row items-center justify-center gap-1">
						{#each [0, 1, 2] as index}
							<div class="h-1.5 w-1.5 rounded-full bg-[#A5B9D3]"></div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</TimelineRow>
