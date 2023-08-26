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
		url: '/samples/images/mountain'
	};

	throw error(404, 'Not found');
}
