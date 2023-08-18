<script>
	import { button, buttonChild } from './Button.style';
	/** @type {string} */
	export let variant;
	/** @type {() => void} */
	export let handleClick;
	/** @type {boolean} */
	export let disabled;
</script>

<button class={button({ variant })} on:click={handleClick} {disabled} {...$$restProps}>
	<span class={buttonChild({ variant })} />
	<span class="relative"><slot /></span>
</button>
