const fs = require('fs');
const path = require('path');

const fullComponents = fs.readdirSync(path.join(__dirname, '../../src/components'));
const pageComponents = fs.readdirSync(path.join(__dirname, '../../src/pages'));
const components = pageComponents.concat(fullComponents);

const modules = fs.readdirSync(path.join(__dirname, '../../src/modules'));
const services = fs.readdirSync(path.join(__dirname, '../../src/services'));

module.exports = {
  componentExists: (component) => components.indexOf(component) >= 0,
  moduleExists: (module) => modules.indexOf(module) >= 0,
  serviceExists: (service) => services.indexOf(service) >= 0,
};
