export async function getWeatherFrom(query = 'florianopolis') {
	const apiUrl = '/api/get-weather';
	return fetch(`${apiUrl}?q=${query}`).then((res) => res.json());
}
