import { error } from '@sveltejs/kit';

// Svelte Component To Image
import { image_from_component } from 'svelte-component-to-image';

// Normal .svelte component
import Image from './Image.svelte';

export const GET = async ({ url }) => {
	try {
		console.log(url.searchParams);
		const options = {
			// @ts-ignore
			width: url?.searchParams?.get('width') ? parseInt(url.searchParams.get('width')) : 1,
			// @ts-ignore
			height: url?.searchParams?.get('height') ? parseInt(url.searchParams.get('height')) : 1,
			props: {
				text: url.searchParams.get('text') || '',
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
