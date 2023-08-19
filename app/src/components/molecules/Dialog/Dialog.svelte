<script>
	import { cx } from 'class-variance-authority';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	import { fade, scale } from 'svelte/transition';
	import Button from '../../atoms/Button/Button.svelte';
	/** @type {boolean} */
	export let showModal;

	/** @type {string} */
	export let classes = '';
</script>

{#if showModal}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100, delay: 100 }}
		class="fixed inset-0 flex bg-black/50 backdrop-blur-sm"
		on:click|self={() => (showModal = false)}
	>
		<div
			in:scale={{ duration: 200, delay: 100, start: 0.8 }}
			out:scale={{ duration: 200, start: 0.8 }}
			role="dialog"
			class={cx(
				'relative z-50 m-auto max-w-md rounded-lg border-2 border-black bg-white shadow-lg',
				classes
			)}
		>
			<span class="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
				<Button handleClick={() => (showModal = false)} variant="icon"><IoIosClose /></Button>
			</span>
			<div class="space-y-4 p-8">
				<slot />
			</div>
		</div>
	</div>
{/if}
