<script lang="ts">
  import ImageCard from '../components/ImageCard.svelte';

	import TimelineRow from '../components/TimelineRow.svelte';
	import TimelineText from '../components/TimelineText.svelte';
</script>

<div class="grid grid-cols-[20%_80%]">
	<TimelineRow>
		<div slot="center" class="absolute -right-12 -top-3">
			<div class="flex flex-col items-center gap-3 bg-white">
				<div class="box-border h-24 w-24 rounded-full border-[0.5px] border-solid border-[#4D4D4D]">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="assets/krishna-kiran-photo.jpeg"
						alt="krishna-kiran-photo"
						class="rounded-full pl-0.5 pt-0.5"
					/>
				</div>
				<div class="w-24 text-center text-2xl font-bold not-italic leading-7 text-[#4B5C6D]">
					Krishna Kiran
				</div>
			</div>
		</div>
		<div slot="right"></div>
	</TimelineRow>
	<TimelineRow>
		<div slot="left">
			<TimelineText>Dec 2023</TimelineText>
		</div>
		<div slot="right" class="flex gap-3">
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
			<div class="text-right text-base font-bold leading-[19px] text-[#141618]">Duggup</div>
			<TimelineText>San Francisco Bay Area</TimelineText>
			<TimelineText>Joined</TimelineText>
			<TimelineText>Nov 2023</TimelineText>
		</div>
		<div slot="right"></div>
	</TimelineRow>
	<TimelineRow>
		<div slot="left">
			<TimelineText>Dec 2023</TimelineText>
		</div>
		<div slot="right" class="flex gap-3">
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
			<TimelineText>San Francisco Bay Area</TimelineText>
			<TimelineText>Joined</TimelineText>
			<TimelineText>Nov 2023</TimelineText>
		</div>
		<div slot="right"></div>
	</TimelineRow>
</div>
