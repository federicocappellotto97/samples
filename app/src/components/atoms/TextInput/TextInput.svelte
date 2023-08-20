<script>
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import FaEyeSlash from 'svelte-icons/fa/FaEyeSlash.svelte';
	import IoIosAt from 'svelte-icons/io/IoIosAt.svelte';
	import InputError from '../InputError/InputError.svelte';
	import { input } from './TextInput.style';
	/** @type {boolean} */
	export let disabled = false;
	/** @type {string} */
	export let error = '';
	/** @type {string} */
	export let type;
	/** @type {string} */
	export let label = '';
	/** @type {string} */
	export let id = '';

	let showPassword = false;
</script>

<div>
	{#if label}
		<label for={id} class:opacity-50={disabled} class="text-14 mb-1 inline-block font-bold"
			>{label}</label
		>
	{/if}
	<div class="relative" class:opacity-50={disabled}>
		<input
			{id}
			type={type == 'password' && showPassword ? 'text' : type}
			class={input({ error: !!error, icon: type == 'password' || type == 'email' })}
			{disabled}
			{...$$restProps}
		/>
		{#if $$slots.icon}
			<span class="absolute right-4 top-1/2 inline-block h-4 -translate-y-1/2">
				<slot name="icon" />
			</span>
		{:else if type == 'password'}
			<button
				class="absolute right-4 top-1/2 inline-block h-4 -translate-y-1/2"
				on:click={() => (showPassword = !showPassword)}
			>
				{#if showPassword}
					<FaEyeSlash />
				{:else}
					<FaEye />
				{/if}
			</button>
		{:else if type == 'email'}
			<span class="absolute right-4 top-1/2 inline-block h-4 -translate-y-1/2">
				<IoIosAt />
			</span>
		{/if}
	</div>
	<InputError {error} {disabled} />
</div>
