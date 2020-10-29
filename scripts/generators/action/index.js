module.exports = {
  description: 'Add a redux action',
  prompts: [
    {
      type: 'input',
      name: 'moduleName',
      message: 'Name of the EXISTING module',
    },
    {
      type: 'input',
      name: 'actionName',
      message: 'Name of the action',
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'append',
        path: `../../src/modules/${data.moduleName}/${data.moduleName}.actions.ts`,
        templateFile: './action/actions.ts.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
