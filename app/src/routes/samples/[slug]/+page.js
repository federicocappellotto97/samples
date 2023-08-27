import { error } from '@sveltejs/kit';
import { client } from '../../../sanity';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const query = /* groq */ `*[_type == 'mediatype' && slug.current == '${params.slug}'][0]{
		_id, 'title': name, content
	}`;

	const querySamples = /* groq */ `*[_type == 'sample' && '${params.slug}' == mediatype->slug.current]
	{'title': name, 'slug': slug.current, preview {asset->{url}}, 'type': mediatype->{'slug':slug.current}}`;

	const page = await client.fetch(query);
	const samples = await client.fetch(querySamples);

	if (!page) {
		throw error(404, 'Not found');
	}

	return {
		...page,
		items: samples
	};
}
