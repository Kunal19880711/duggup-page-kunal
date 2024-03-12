<div class="relative">
    <div class="flex flex-left min-h-40 items-center justify-end pr-10">
        <slot name="left"><!-- optional fallback --></slot>
    </div>
    <slot name="center"><!-- optional fallback --></slot>
</div>
<div class="justify-right flex min-h-40 items-center border-l border-dotted border-l-[#525C69] pl-10">
	<slot name="right"><!-- optional fallback --></slot>
</div>
