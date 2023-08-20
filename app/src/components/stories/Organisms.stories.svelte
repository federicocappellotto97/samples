<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import HeroBigTitle from '../organisms/HeroBigTitle/HeroBigTitle.svelte';
	import SectionTextImage from '../organisms/SectionTextImage/SectionTextImage.svelte';
	import Header from '../organisms/Header/Header.svelte';
	import SectionGridTexts from '../organisms/SectionGridTexts/SectionGridTexts.svelte';
</script>

<Meta
	title="Stories/Organisms"
	argTypes={{
		variantHeroBigTitle: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		},
		variantSectionTextImage: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary']
		},
		variantSectionGridTexts: {
			control: 'radio',
			options: ['primary', 'secondary', 'tertiary', 'rainbow']
		}
	}}
	args={{
		variantHeroBigTitle: 'secondary',
		variantSectionTextImage: 'tertiary',
		variantSectionGridTexts: 'rainbow'
	}}
	parameters={{ layout: 'fullscreen' }}
/>

<Template let:args>
	<Header title="Samples" />
	<HeroBigTitle
		title="Title"
		content="<p>Lorem ipsum dolor sit amet</p>"
		variant={args.variantHeroBigTitle}
		componentIndex={0}
	/>
	<SectionTextImage
		title="Lorem ipsum"
		content="<p>Lorem ipsum dolor sit amet</p>"
		link={{
			label: 'Link',
			href: '#'
		}}
		variant={args.variantSectionTextImage}
		image={{
			src: 'https://img.freepik.com/premium-vector/abstract-shapes-background-neo-brutalist-wave-design-wavy-banner-retro-brutalist-style_757611-811.jpg?w=2000',
			alt: 'Lorem ipsum',
			width: 2000,
			height: 1000
		}}
	/>
	<SectionTextImage
		title="Lorem ipsum"
		content="<p>Lorem ipsum dolor sit amet</p>"
		link={{
			label: 'Link',
			href: '#'
		}}
		variant={args.variantSectionTextImage}
		image={{
			src: 'https://img.freepik.com/premium-vector/abstract-shapes-background-neo-brutalist-wave-design-wavy-banner-retro-brutalist-style_757611-811.jpg?w=2000',
			alt: 'Lorem ipsum',
			width: 2000,
			height: 1000
		}}
		reverse
	/>
	<SectionGridTexts
		items={[
			'<p>Lorem ipsum dolor sit amet</p>',
			'<p>Lorem ipsum dolor sit amet</p>',
			'<p>Lorem ipsum dolor sit amet</p>',
			'<p>Lorem ipsum dolor sit amet</p>'
		]}
		variant={args.variantSectionGridTexts}
	/>
</Template>

<Story name="Default" args={{}} />
