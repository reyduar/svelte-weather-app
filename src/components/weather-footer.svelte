<script>
	export let date;
	export let humidity;
	export let wind;
	export let feelslike;

	const dateToInternalDate = (x) => {
		const d = new Date(x);
		return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}: ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
	};
</script>

<footer>
	<div>
		<span> {dateToInternalDate(date)} </span>
	</div>
	<p></p>
	<section>
		<div>
			<strong> {humidity} </strong>
			<span> Humedad </span>
		</div>
		<div>
			<strong> {wind}km/h </strong>
			<span> Wind Speed </span>
		</div>
		<div>
			<strong> {feelslike}° </strong>
			<span> Feel like </span>
		</div>
	</section>
	<p>&copy; 2024 Ariel Duarte</p>
</footer>

<style>
	footer {
		background-color: #f2f2f2;
		padding: 10px;
		text-align: center;
		border: 2px solid #f2f2f2;
	}

	section {
		display: flex;
		justify-content: space-evenly;
		text-align: center;
	}

	section span {
		display: block;
	}

	strong {
		font-weight: 700;
		color: #444;
	}
</style>
