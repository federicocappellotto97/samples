<script>
	import { cx } from 'class-variance-authority';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import { fade } from 'svelte/transition';
	/** @type {string} */
	export let label;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {boolean} */
	export let defaultChecked = false;
	let checked = defaultChecked;
	/**
	 * Event handler for checkbox change event.
	 *
	 * @param {Event} e - The event object.
	 */
	let handleChange = function (e) {
		const target = e.target;
		if (target instanceof HTMLInputElement) {
			checked = target.checked;
		}
	};
</script>

<label
	class={cx('inline-flex items-center gap-2', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}
>
	<input
		{...$$restProps}
		type="checkbox"
		class="peer sr-only"
		{disabled}
		{checked}
		on:change={handleChange}
	/>
	<span
		class="peer-checked:bg-primary group relative aspect-square h-4 rounded-md border-2 border-black bg-gray-300 p-2 shadow-sm transition-colors duration-300 ease-out peer-focus:outline-none peer-disabled:opacity-50"
	>
		{#if checked}
			<span
				transition:fade={{ duration: 200 }}
				class="absolute left-1/2 top-1/2 inline-block h-2 -translate-x-1/2 -translate-y-1/2"
				><FaCheck /></span
			>
		{/if}
	</span>
	{#if label}
		<span class="text-14 inline-block font-bold">{label}</span>
	{/if}
</label>
