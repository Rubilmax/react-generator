const fs = require('fs');
const path = require('path');

const fullComponents = fs.readdirSync(path.join(__dirname, '../../../src/components'));
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../src/pages'));
const components = pageComponents.concat(fullComponents);

function componentExists(component) {
  return components.indexOf(component) >= 0;
}

module.exports = {
  componentExists,
};
