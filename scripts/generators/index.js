const componentGenerator = require('./component/index');
const moduleGenerator = require('./module/index');
const actionGenerator = require('./action/index');
const pageGenerator = require('./page/index');
const serviceGenerator = require('./service/index');

module.exports = (plop) => {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Module', moduleGenerator);
  plop.setGenerator('Action', actionGenerator);
  plop.setGenerator('Page', pageGenerator);
  plop.setGenerator('Service', serviceGenerator);
};
