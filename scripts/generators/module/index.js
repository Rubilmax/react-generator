module.exports = {
  description: 'Add a redux module',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name of the module',
      default: 'Module',
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.types.d.ts`,
        templateFile: './module/types.d.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.actions.ts`,
        templateFile: './module/actions.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.reducer.ts`,
        templateFile: './module/reducer.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.selectors.ts`,
        templateFile: './module/selectors.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.saga.ts`,
        templateFile: './module/saga.ts.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `../../src/modules/${data.name}/${data.name}.hooks.ts`,
        templateFile: './module/hooks.ts.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
