<div>
	<slot />
</div>

<style>
	:global(body) {
		background: #fdfdfd;
		display: grid;
		place-items: center;
		min-height: 100vh;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	div {
		aspect-ratio: 9/16;
		width: 400px;
		max-width: 100%;
		display: block;
		box-shadow: 0 0 50px 1px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
</style>
