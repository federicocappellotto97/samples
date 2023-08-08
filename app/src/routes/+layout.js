/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return {
		menu: {
			lorem: 'ipsum'
		}
	const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	const res = await response.json();
	console.log(res.chartName);
	return {
		title: res.chartName
	};
}
