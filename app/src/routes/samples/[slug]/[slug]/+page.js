import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		image: {
			width: 1024,
			height: 768,
			src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
			alt: ''
		},
		title: 'Mountain',
		type: 'image',
		url: '/samples/images/mountain',
		images: [
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: 'sd',
				size: '129kb'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'png',
				resolution: 'sd',
				size: '129kb'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'bpm',
				resolution: 'sd',
				size: '323kb'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: 'hd',
				size: '1mb'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: '4k',
				size: '901kb'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'png',
				resolution: '4k',
				size: '999kb'
			}
		]
	};

	throw error(404, 'Not found');
}
