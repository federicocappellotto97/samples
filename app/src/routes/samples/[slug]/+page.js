import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.slug === 'images') {
		return {
			title: 'Images',
			content:
				'<p>Here you can find the types of sample image file formats we have available for download.<br/>Currently there are <b>53</b> image formats supported.</p>',
			items: [
				{
					image: {
						width: 1024,
						height: 768,
						src: `/api/image?width=1024&height=768&text=Mountain&bgColor=795548`,
						alt: ''
					},
					title: 'Mountain',
					url: '/samples/images/mountain'
				},
				{
					image: {
						width: 1024,
						height: 768,
						src: `/api/image?width=1024&height=768&text=Sea&bgColor=ADD8E6`,
						alt: ''
					},
					title: 'Sea',
					url: '/samples/images/sea'
				},
				{
					image: {
						width: 1024,
						height: 768,
						src: `/api/image?width=1024&height=768&text=Forest&bgColor=228B22`,
						alt: ''
					},
					title: 'Forest',
					url: '/samples/images/forest'
				},
				{
					image: {
						width: 1024,
						height: 768,
						src: `/api/image?width=1024&height=768&text=Fire&bgColor=f27d0c`,
						alt: ''
					},
					title: 'Fire',
					url: '/samples/images/fire'
				}
			]
		};
	}

	throw error(404, 'Not found');
}
