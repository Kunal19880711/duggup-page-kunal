<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { ChevronDown } from 'lucide-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<div class="flex flex-row items-center">
			<div class="w-14 h-14 box-border rounded-full border-2 border-solid border-[#EAEFF5]">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="assets/krishna-kiran-photo.jpeg"
					alt="krishna-kiran-photo"
					class="rounded-full pl-0.5 pt-0.5"
				/>
			</div>
			<div class="p-3">Krishna Kiran</div>
			<div>
        <ChevronDown color="#4D4D4D" class="px-1"/>
			</div>
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Profile</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
