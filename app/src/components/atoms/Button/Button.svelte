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

	let pressed = false;
</script>

<svelte:window on:mouseup={() => (pressed = false)} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	class={button({ variant, pressed, size, class: classes })}
	on:click={handleClick}
	{href}
	{target}
	{disabled}
	{...$$restProps}
	on:mousedown={() => (pressed = true)}
	draggable={false}
>
	<span class={buttonChild({ variant })} />
	<span class="relative"><slot /></span>
</svelte:element>
