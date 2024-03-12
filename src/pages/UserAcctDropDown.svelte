<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>
 
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <div class="flex flex-row items-center gap-0">
			<div class="box-border w-13 h-13 border-[0.5px] border-solid border-[#4D4D4D] rounded-full ">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src="assets/krishna-kiran-photo.png" alt="krishna-kiran-photo" class="rounded-full pt-0.5 pl-0.5" />
			</div>
      <div class="p-3">
        Krishna Kiran
      </div>
      <div>
        <i class="fa-solid fa-chevron-down text-[#4D4D4D] px-1"></i>
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