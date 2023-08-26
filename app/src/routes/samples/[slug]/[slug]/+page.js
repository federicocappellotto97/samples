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
		url: '/samples/images/mountain',
		images: [
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: 'sd'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'png',
				resolution: 'sd'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'bpm',
				resolution: 'sd'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: 'hd'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'jpg',
				resolution: '4k'
			},
			{
				width: 1024,
				height: 768,
				src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
				alt: '',
				format: 'png',
				resolution: '4k'
			}
		]
	};

	throw error(404, 'Not found');
}
