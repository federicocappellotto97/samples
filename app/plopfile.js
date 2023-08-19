export default function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'create new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name?'
			},
			{
				type: 'list',
				name: 'size',
				message: 'Component size?',
				choices: ['atoms', 'molecules', 'organisms']
			},
			{
				type: 'confirm',
				name: 'storybook',
				message: 'Has story?'
			}
		],
		actions: (data) =>
			[
				{
					type: 'add',
					path: 'src/components/{{size}}/{{pascalCase name}}/{{pascalCase name}}.svelte',
					templateFile: 'plops/component.hbs'
				},
				data?.storybook && {
					type: 'add',
					path: 'src/components/{{size}}/{{pascalCase name}}/{{pascalCase name}}.stories.svelte',
					templateFile: 'plops/component.stories.hbs'
				}
			].filter((d) => !!d)
	});
}
