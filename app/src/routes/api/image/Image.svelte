<script>
	export let text = '';
	export let bgColor = 'FFFFFF';
	export let textColor = '000000';
</script>

<div
	style="display: flex; justify-content: center; align-items: center; background-color: #{/^[0-9A-F]{6}$/i.test(
		bgColor
	)
		? bgColor
		: 'FFFFFF'}; width: 100%; height: 100%"
>
	{#if text}
		<h1 style="color: #{/^[0-9A-F]{6}$/i.test(textColor) ? textColor : '000000'}; font-size: 100px">
			{text}
		</h1>
	{/if}
</div>
