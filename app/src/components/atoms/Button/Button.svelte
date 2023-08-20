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

	let pressed = false;
</script>

<button
	class={button({ variant, pressed, size })}
	on:click={handleClick}
	{disabled}
	{...$$restProps}
	on:mousedown={() => (pressed = true)}
	on:mouseup={() => (pressed = false)}
>
	<span class={buttonChild({ variant })} />
	<span class="relative"><slot /></span>
</button>
