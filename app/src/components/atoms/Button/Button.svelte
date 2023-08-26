<script>
	import { button, buttonChild } from './Button.style';
	/** @type {string} */
	export let variant = 'primary';
	/** @type {() => void} */
	export let handleClick = () => {};
	/** @type {boolean} */
	export let disabled = false;
	/** @type {'small' | 'medium'} */
	export let size = 'medium';
	/** @type {string} */
	export let classes = '';
	/** @type {string} */
	export let href = '';
	/** @type {import('$lib/typedefs').Target} */
	export let target = undefined;
	/** @type {boolean | undefined} */
	export let selected = undefined;
	let pressed = false;
</script>

<svelte:window on:mouseup={() => (pressed = false)} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	class={button({ variant, pressed, size, selected, class: classes })}
	on:click={handleClick}
	{href}
	{target}
	{disabled}
	{...$$restProps}
	on:mousedown={() => (pressed = true)}
	draggable={false}
>
	<span class={buttonChild({ variant, selected })} />
	{#if $$slots.icon}
		<span
			class="relative flex items-center"
			class:gap-2={size === 'small'}
			class:gap-4={size === 'medium'}
		>
			<span class:w-4={size === 'small'} class:w-6={size === 'medium'}>
				<slot name="icon" />
			</span>
			<span><slot /></span>
		</span>
	{:else}
		<span class="relative"><slot /></span>
	{/if}
</svelte:element>
