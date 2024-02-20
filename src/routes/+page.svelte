<script>
	import { getWeatherFrom } from '../services/weather';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';

	const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
	<WeatherIcon icon={weather.icon} description={weather.conditionText} />
	<span>{weather.temperature}°</span>
	<span>{weather.conditionText}</span>
	<section>
		<h1>{weather.name}</h1>
		<small>{weather.country}</small>
	</section>
	<WeatherFooter
		date={weather.localtime}
		humidity={weather.humidity}
		wind={weather.windSpeed}
		feelslike={weather.feelslike}
	/>
{/await}

<style>
	section {
		padding: 16px;
	}
	h1 {
		font-weight: 600;
		color: #333;
		text-transform: capitalize;
	}

	span {
		font-weight: 500;
		font-size: 2rem;
		/* position: absolute; */
		/* top: 250px;
		left: 500px; */
	}
</style>
