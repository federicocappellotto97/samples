<script>
	import { cx } from 'class-variance-authority';
	import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
	import InputError from '../InputError/InputError.svelte';
	/** @type {string} */
	export let label;
	/** @type {string | number} */
	export let value;
	/** @type {boolean} */
	export let disabled = false;
	/** @type {string} */
	export let group;
	/** @type {string} */
	export let error = '';
</script>

<div class="flex flex-col">
	<label
		class={cx(
			'inline-flex items-center gap-2',
			disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
		)}
	>
		<input {...$$restProps} {value} type="radio" class="peer sr-only" {disabled} bind:group />
		<span
			class={cx(
				'peer-checked:bg-primary group relative aspect-square h-4 rounded-full border-2 bg-gray-300 p-2 shadow-sm transition-colors duration-300 ease-out peer-focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2',
				error ? 'border-tertiary' : 'border-black'
			)}
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
	<InputError {error} {disabled} />
</div>
