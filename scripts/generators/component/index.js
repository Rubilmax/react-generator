const { componentExists } = require('../utils/component-exists');

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'path',
      message: 'Where should it be created?',
      default: 'components',
    },
    {
      type: 'list',
      name: 'fetch',
      message: 'Should it fetch data?',
      choices: () => ['Yes', 'No'],
    },
  ],
  actions: (data) => {
    const actions = [];

    if (data.fetch === 'Yes') {
      actions.push({
        type: 'add',
        path: `../../src/${data.path}/{{properCase name}}/index.ts`,
        templateFile: `./component/index.fetch.ts.hbs`,
        abortOnFail: true,
      });
    }

    return actions.concat([
      {
        type: 'add',
        path: `../../src/${data.path}/{{properCase name}}/{{properCase name}}.component.tsx`,
        templateFile: `./component/component.tsx.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/${data.path}/{{properCase name}}/{{properCase name}}.hooks.ts`,
        templateFile: `./component/hooks.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/${data.path}/{{properCase name}}/{{properCase name}}.style.ts`,
        templateFile: `./component/style.ts.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/${data.path}/{{properCase name}}/index.ts`,
        templateFile: './component/index.ts.hbs',
        abortOnFail: true,
      },
    ]);
  },
};
