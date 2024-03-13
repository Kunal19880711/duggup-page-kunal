<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Dot from 'lucide-svelte/icons/dot';

	import ImageCard from '../components/ImageCard.svelte';
	import TimelineRow from '../components/TimelineRow.svelte';
	import LabelText from '../components/LabelText.svelte';
</script>

<div class="grid grid-cols-[20%_60%_20%] pr-52">
	<TimelineRow useFullLength={true}>
		<div slot="timeline" class="absolute -right-12 -top-3">
			<div class="flex flex-col items-center gap-3 bg-white">
				<div class="box-border h-24 w-24 rounded-full border-[0.5px] border-solid border-[#4D4D4D]">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="assets/krishna-kiran-photo.jpeg"
						alt="assets/krishna-kiran-photo.jpeg"
						class="rounded-full pl-0.5 pt-0.5"
					/>
				</div>
				<div class="w-24 text-center text-2xl font-bold not-italic leading-7 text-[#4B5C6D]">
					Krishna Kiran
				</div>
			</div>
		</div>
		<div slot="center">
			<div class="flex flex-col gap-5 pl-10">
				<div class="flex flex-row justify-between">
					<div class="basis-8/12 text-sm font-normal leading-6 text-[#141618]">
						Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
						Engineering. I write hot-takes on building a business, shipping delightful products and
						accelerating product and career growth.
					</div>
					<div class="flex min-w-20 flex-col items-end justify-end">
						<div class="flex h-9 w-9">
							<img src="assets/duggle-logo.png" alt="duggle-logo" class="rounded-full" />
						</div>
						<div class="text-right text-base font-bold leading-5 text-[#141618]">Duggup</div>
						<LabelText>Co-Founder and CEO</LabelText>
					</div>
				</div>
				<div class="flex flex-row justify-between">
					<Button variant="outline" class="border-[#4D4D4D] shadow-[0px_4px_0px_#4D4D4D]">
						<div class="flex flex-row items-center">
							<div class="px-2 text-sm font-normal capitalize not-italic leading-5 text-[#4D4D4D]">
								Follow
							</div>
						</div>
					</Button>
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
	<TimelineRow>
		<div slot="left">
			<LabelText className="pt-4">Dec 2023</LabelText>
		</div>
		<div slot="timeline" class="absolute -right-2 top-[50%]">
			<div class="h-4 w-4 rounded-full border-[3px] border-[#0066FF] bg-white"></div>
		</div>
		<div slot="center" class="flex gap-9">
			<ImageCard imgUrl="assets/steve-jobs.jpeg">
				No amount of technology can convert a bad story into a good story.
			</ImageCard>
			<ImageCard imgUrl="assets/sam-altman.jpeg">
				Most people don't have original ideas. Here is how Sam Altman pushes...
			</ImageCard>
		</div>
	</TimelineRow>
	<TimelineRow>
		<div slot="left" class="flex flex-col items-end">
			<div class="h-12 w-12">
				<img src="assets/duggle-logo.png" alt="duggle-logo" class="rounded-full" />
			</div>
			<div class="text-right text-base font-bold leading-5 text-[#141618]">Duggup</div>
			<LabelText>San Francisco Bay Area</LabelText>
			<LabelText>Joined</LabelText>
			<LabelText>Nov 2023</LabelText>
		</div>
		<div slot="timeline" class="absolute -right-3.5 top-[40%] bg-white">
			<div class="h-7 w-7 rounded-full border-[9px] border-[#0066FF]"></div>
		</div>
		<div slot="center" class="w-full">
			<div class="flex w-full flex-col items-start justify-center bg-white px-5 py-4">
				<div class="text-nowrap text-xl font-bold leading-8 text-[#141618]">Co-Founder and CEO</div>
				<LabelText>Full-time <Dot class="pb-2" /> Remote</LabelText>
			</div>
		</div>
	</TimelineRow>
	<TimelineRow>
		<div slot="left">
			<LabelText className="pt-4">Dec 2023</LabelText>
		</div>
		<div slot="timeline" class="absolute -right-2 top-[50%]">
			<div class="h-4 w-4 rounded-full border-[3px] border-[#0066FF] bg-white"></div>
		</div>
		<div slot="center" class="flex gap-9">
			<ImageCard imgUrl="assets/desktop.jpeg">
				Startup Lesson I am reflecting. Don't build for the "average person".
			</ImageCard>
			<ImageCard imgUrl="assets/map.png">
				Your biggest regrets at 80 will be acts of omission.
			</ImageCard>
		</div>
	</TimelineRow>
	<TimelineRow>
		<div slot="left" class="flex flex-col items-end">
			<div class="h-12 w-12">
				<img src="assets/betterup-logo.jpeg" alt="betterup-logo" class="rounded-full" />
			</div>
			<div class="text-right text-base font-bold leading-[19px] text-[#141618]">BetterUp</div>
			<LabelText>San Francisco Bay Area</LabelText>
			<LabelText>Joined</LabelText>
			<LabelText>Nov 2023</LabelText>
		</div>
		<div slot="timeline" class="absolute -right-4 top-[40%]">
			<div class="h-7 w-7 rounded-full border-[9px] border-[#0066FF] bg-white"></div>
		</div>
		<div slot="center" class="w-full">
			<div class="flex w-full flex-col items-start justify-center bg-white px-5 py-4">
				<div class="text-nowrap text-xl font-bold leading-8 text-[#141618]">VP Engineering</div>
				<LabelText>Full-time</LabelText>
			</div>
		</div>
	</TimelineRow>
</div>
