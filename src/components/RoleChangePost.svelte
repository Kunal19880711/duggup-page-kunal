<script context="module" lang="ts">
	export type Company = {
		name: string,
		logoUrl: string,
	}

	export type CompanyJoin = {
		location:string,
		month: string,
		role: string,
		roleLabels: string[]
	}

	export interface RoleChangePostData {
		company: Company,
		joining: CompanyJoin
	}
	// your script goes here
</script>

<script lang="ts">
	import Dot from 'lucide-svelte/icons/dot';

	import TimelineRow from './TimelineRow.svelte';
	import LabelText from './LabelText.svelte';

	export let roleChangePost: RoleChangePostData;
</script>

<TimelineRow>
	<div slot="left" class="flex flex-col items-end">
		<div class="h-12 w-12">
			<img
				src={roleChangePost.company.logoUrl}
				alt={roleChangePost.company.logoUrl}
				class="rounded-full"
			/>
		</div>
		<div class="text-right text-base font-bold leading-[19px] text-[#141618]">BetterUp</div>
		<LabelText>{roleChangePost.joining.location}</LabelText>
		<LabelText>Joined</LabelText>
		<LabelText>{roleChangePost.joining.month}</LabelText>
	</div>
	<div slot="timeline" class="absolute -right-4 top-[40%]">
		<div class="h-7 w-7 rounded-full border-[9px] border-[#0066FF] bg-white"></div>
	</div>
	<div slot="center" class="w-full">
		<div class="flex w-full flex-col items-start justify-center bg-white px-5 py-4">
			<div class="text-nowrap text-xl font-bold leading-8 text-[#141618]">
				{roleChangePost.joining.role}
			</div>
			<LabelText>
				{#each roleChangePost.joining.roleLabels as roleLabel, index}
					{#if index > 0}
						<Dot class="pb-2" />
					{/if}
					{roleLabel}
				{/each}
			</LabelText>
		</div>
	</div>
</TimelineRow>
