const componentGenerator = require('./component/index');
const moduleGenerator = require('./module/index');
const actionGenerator = require('./action/index');

module.exports = (plop) => {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Module', moduleGenerator);
  plop.setGenerator('Action', actionGenerator);
};
