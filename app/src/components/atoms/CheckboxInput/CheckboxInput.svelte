<script>
	import { cx } from 'class-variance-authority';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
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
	<input {...$$restProps} type="checkbox" class="peer sr-only" {disabled} bind:checked />
	<span
		class="peer-checked:bg-primary group relative aspect-square h-4 rounded-md border-2 border-black bg-gray-300 p-2 shadow-sm transition-colors duration-300 ease-out peer-focus:outline-none peer-disabled:opacity-50"
	>
		<span
			class="group-peer-checked:visible group-peer-checked:opacity-100 invisible absolute left-1/2 top-1/2 inline-block h-2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 ease-out"
			><FaCheck /></span
		>
	</span>
	{#if label}
		<span class="text-14 inline-block font-bold">{label}</span>
	{/if}
</label>
