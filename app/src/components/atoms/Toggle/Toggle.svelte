<script>
	import { cx } from 'class-variance-authority';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import { fade } from 'svelte/transition';
	/** @type {string} */
	export let label;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let checked = false;
</script>

<label
	class={cx('inline-flex items-center gap-2', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}
>
	{#if label}
		<span class="text-14 inline-block font-bold">{label}</span>
	{/if}
	<input {...$$restProps} type="checkbox" class="peer sr-only" {disabled} bind:checked />
	<span
		class="peer-checked:bg-primary group relative h-7 w-14 rounded-full border-2 border-black bg-gray-300 p-2 shadow-md transition-colors duration-300 ease-out peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2 peer-disabled:opacity-50"
	>
		<span
			class="group-peer-checked:left-[calc(100%_-_2px)] group-peer-checked:-translate-x-full absolute left-0.5 top-1/2 inline-flex aspect-square h-5 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white transition-all"
		>
			{#if checked}
				<span transition:fade={{ duration: 200 }} class="inline-block h-2"><FaCheck /></span>
			{/if}
		</span>
	</span>
</label>
