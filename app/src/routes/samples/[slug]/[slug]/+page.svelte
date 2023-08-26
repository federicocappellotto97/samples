<script>
	import HeroBigTitle from '../../../../components/organisms/HeroBigTitle/HeroBigTitle.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { title, image } = data;
</script>

<HeroBigTitle {title} {image} />
