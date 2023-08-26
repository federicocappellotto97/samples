<script>
	import SectionTextImage from '../../../../components/organisms/SectionTextImage/SectionTextImage.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { title, image } = data;
</script>

<SectionTextImage {title} {image} variant="secondary" />
