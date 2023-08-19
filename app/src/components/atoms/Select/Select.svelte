<script>
	import { typewriter } from '$lib/animations';
	import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte';
	import { fade } from 'svelte/transition';
	import InputError from '../InputError/InputError.svelte';
	import { cx } from 'class-variance-authority';

	/** @type {boolean} */
	export let disabled = false;
	/** @type {string} */
	export let error = '';
	/** @type {string} */
	export let placeholder = '';
</script>

<div class:opacity-50={disabled} class:cursor-not-allowed={disabled}>
	<select
		{...$$restProps}
		class={cx(
			'inline-block h-10 w-full appearance-none rounded-lg border-2 py-2 pl-4 pr-10 font-semibold leading-none tracking-widest shadow-lg invalid:text-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
			error ? 'border-tertiary' : 'border-black'
		)}
		{disabled}
	>
		{#if placeholder}
			<option value="" disabled selected>{placeholder}</option>
		{/if}
		<slot />
	</select>
	<InputError {error} {disabled} />
</div>

<style>
	select {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
		background-position: right 0.5rem center;
		background-repeat: no-repeat;
		background-size: 1.5em 1.5em;
		print-color-adjust: exact;
	}
</style>
