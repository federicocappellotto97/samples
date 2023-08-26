<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import HeroBigTitle from '../organisms/HeroBigTitle/HeroBigTitle.svelte';
	import SectionTextImage from '../organisms/SectionTextImage/SectionTextImage.svelte';
	import Header from '../organisms/Header/Header.svelte';
	import SectionGridTexts from '../organisms/SectionGridTexts/SectionGridTexts.svelte';
	import Banner from '../organisms/Banner/Banner.svelte';
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
	<div class="contens divide-y-2 divide-black">
		<HeroBigTitle
			title="Title"
			content="<p>Lorem ipsum dolor sit amet</p>"
			variant={args.variantHeroBigTitle}
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
			componentIndex={1}
		/>
		<SectionTextImage
			title="Lorem ipsum"
			content="<p>Lorem ipsum dolor sit amet</p>"
			variant={args.variantHeroBigTitle}
			image={{
				src: 'https://img.freepik.com/premium-vector/abstract-shapes-background-neo-brutalist-wave-design-wavy-banner-retro-brutalist-style_757611-811.jpg?w=2000',
				alt: 'Lorem ipsum',
				width: 2000,
				height: 1000
			}}
			componentIndex={2}
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
		<Banner
			title="Lorem ipsum"
			content="<p>Lorem ipsum dolor sit amet</p>"
			link={{
				label: 'Link',
				href: '#'
			}}
		/>
	</div>
</Template>

<Story name="Default" args={{}} />
