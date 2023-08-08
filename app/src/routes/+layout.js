import { client } from '../sanity';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const query = /* groq */ `*[_type == "settings"][0] {
        "title": title[_key == "en"][0].value,
        "description": description[_key == "en"][0].value,
    }`;
	const data = await client.fetch(query);
	console.log(data);

	return data;
}
