<script>
	export let text = '';
	export let bgColor = 'FFFFFF';
	export let textColor = '000000';
	export let img = '';
	export let width = 1;
</script>

<div
	style="display: flex; justify-content: center; align-items: center; background-color: #{/^[0-9A-F]{6}$/i.test(
		bgColor
	)
		? bgColor
		: 'FFFFFF'}; width: 100%; height: 100%"
>
	{#if img}
		<img
			src={`data:image/png;base64,${img}`}
			width="1024"
			height="1024"
			alt=""
			style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover"
		/>
	{/if}

	{#if text}
		<h1
			style="color: #{/^[0-9A-F]{6}$/i.test(textColor) ? textColor : '000000'}; font-size: {(width *
				100) /
				1024}px"
		>
			{text}
		</h1>
	{/if}
</div>
