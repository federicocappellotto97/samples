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

	let pressed = false;
</script>

<svelte:window on:mouseup={() => (pressed = false)} />

<button
	class={button({ variant, pressed, size, class: classes })}
	on:click={handleClick}
	{disabled}
	{...$$restProps}
	on:mousedown={() => (pressed = true)}
>
	<span class={buttonChild({ variant })} />
	<span class="relative"><slot /></span>
</button>
