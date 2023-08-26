// @ts-nocheck
import { error } from '@sveltejs/kit';

// Svelte Component To Image
import { image_from_component } from 'svelte-component-to-image';
import OpenAI from 'openai';
// Normal .svelte component
import Image from './Image.svelte';
import { OPENAI_API_KEY } from '$env/static/private';
import fs from 'fs';

const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

async function dalle(prompt) {
	if (!prompt) {
		return null;
	}
	try {
		const path = `./dalle/${prompt}.png`;
		if (fs.existsSync(path)) {
			const img = fs.readFileSync(path);
			return Buffer.from(img).toString('base64');
		} else {
			const image = await openai.images.generate({
				prompt,
				n: 1,
				size: '256x256',
				response_format: 'b64_json'
			});
			if (!image.data?.[0]?.b64_json) {
				return;
			}
			fs.writeFile(path, image.data[0].b64_json, 'base64', (err) => {
				if (err) throw err;
			});
			return image.data?.[0]?.b64_json;
		}
	} catch (e) {
		console.error(e);
		return null;
	}
}

export const GET = async ({ url }) => {
	try {
		const width = url?.searchParams?.get('width') ? parseInt(url.searchParams.get('width')) : 1;
		const height = url?.searchParams?.get('height') ? parseInt(url.searchParams.get('height')) : 1;
		const prompt = url?.searchParams?.get('prompt') ? url.searchParams.get('prompt') : null;
		let dalleImg;
		if (OPENAI_API_KEY && prompt) dalleImg = await dalle(prompt);

		const options = {
			width,
			height,
			props: {
				text:
					url.searchParams.get('text') == 'default'
						? `${width}x${height}`
						: url.searchParams.get('text'),
				bgColor: url.searchParams.get('bgColor') || 'FFFFFF',
				textColor: url.searchParams.get('textColor') || '000000',
				img: dalleImg,
				width
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
