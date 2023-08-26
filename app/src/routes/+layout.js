import { client } from '../sanity';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	const querySettings = /* groq */ `*[_type == "settings"][0] {
        "title": title[_key == "en"][0].value,
        "description": description[_key == "en"][0].value,
    }`;
	const queryMenu = /* groq */ `*[_type == "menu" && language == 'en'] {
		key,
		items[] {
			link,
			children[] {
			link,
			children
			}
		}
	}`;

	const settings = await client.fetch(querySettings);
	const menu = await client.fetch(queryMenu);

	return { settings, menu };
}
