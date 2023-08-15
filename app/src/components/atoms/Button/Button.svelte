<script>
	import { button, buttonChildOne, buttonChildTwo } from "./Button.style";
	/** @type {string} */
	export let variant
</script>
<button class="group relative">
	<span class={button({variant})}>
		<slot />
	</span>
	<span
		class={buttonChildOne()}
	/>
	<span
		class={buttonChildTwo()}
	/>
</button>
