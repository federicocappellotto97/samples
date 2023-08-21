import { error } from '@sveltejs/kit';

// Svelte Component To Image
import { image_from_component } from 'svelte-component-to-image';

// Normal .svelte component
import Image from './Image.svelte';
/* 
const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

async function dalle() {
	try {
		const image = await openai.images.generate({
			prompt: 'a white siamese cat',
			n: 1,
			size: '256x256'
		});

		console.log(image.data);
	} catch (e) {
		console.error(e);
		throw error(500, 'Error trying to generate image from component.');
	}
} */

export const GET = async ({ url }) => {
	try {
		// @ts-ignore
		const width = url?.searchParams?.get('width') ? parseInt(url.searchParams.get('width')) : 1;
		// @ts-ignore
		const height = url?.searchParams?.get('height') ? parseInt(url.searchParams.get('height')) : 1;
		const options = {
			width,
			// @ts-ignore
			height,
			props: {
				text: url.searchParams.get('text') || `${width}x${height}`,
				bgColor: url.searchParams.get('bgColor') || 'FFFFFF',
				textColor: url.searchParams.get('textColor') || 'FFFFFF'
			},
			fonts: [
				{
					name: 'Typewriter',
					url: `${url.origin}/fonts/WorkSans-Regular.ttf`,
					weight: 400,
					style: 'normal'
				}
			]
		};

		// pass the component and options to the package
		const image = await image_from_component(Image, options);
		const response = new Response(image);
		response.headers.append('Content-Type', 'image/png');
		response.headers.append('Cache-Control', 's-maxage=604800, stale-while-revalidate=604800');
		return response;
	} catch (e) {
		console.error(e);
		throw error(500, 'Error trying to generate image from component.');
	}
};
