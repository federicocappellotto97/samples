<script>
	import { typewriter } from '$lib/animations';
	import FaExclamationTriangle from 'svelte-icons/fa/FaExclamationTriangle.svelte';
	import { fade } from 'svelte/transition';

	/** @type {string} */
	export let error = '';
	/** @type {boolean} */
	export let hasIcon = true;
	/** @type {boolean} */
	export let disabled = false;
</script>

{#if !!error}
	<p
		transition:fade={{ duration: 200 }}
		class="text-tertiary text-12 mt-3"
		class:opacity-50={disabled}
	>
		{#if hasIcon}
			<span class="mr-1 inline-block h-4 align-middle"><FaExclamationTriangle /></span>
		{/if}
		<span in:typewriter={{}}>{error}</span>
	</p>
{/if}
