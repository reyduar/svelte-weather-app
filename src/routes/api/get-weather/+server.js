const weatherApiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json?';
const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07947fca25msh12db50d0cf7ee8ep132853jsna8277daef092',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function GET({ url }) {
	const query = url.searchParams.get('q') ?? 'florianopolis';

	const response = await fetch(`${weatherApiUrl}q=${query}`, FETCH_OPTIONS);

	const data = await response.json();
	const { location, current } = data;
	const { country, name, localtime } = location;
	const { humidity, temp_c, condition, feelslike_c, is_day, wind_kph, wind_dir } = current;
	const { text, icon, code } = condition;

	return new Response(
		JSON.stringify({
			country,
			name,
			localtime,
			humidity,
			temperature: temp_c,
			conditionText: text,
			icon,
			conditionCode: code,
			feelslike: feelslike_c,
			isDay: is_day,
			windSpeed: wind_kph,
			windDir: wind_dir
		})
	);
}
