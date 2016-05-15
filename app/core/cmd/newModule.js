/*
 * TODO: Make this command better coded ...
 */

const fs   = require('fs');
const path = require('path');

const moduleName = process.argv[process.argv.length-1];

/**
 * Allow creation of a new module 
 * @param  {string} moduleName
 */
let newModule = (moduleName) => {
  const minModuleName = moduleName.toLowerCase();
  const modulePath = path.join(__dirname, `./../../modules/${minModuleName}`);
  
  const indexFileTemplate = `
const ${minModuleName}App = require('express')();

${minModuleName}App.get('/', (req, res) => {
  res.render('default', { title: '${moduleName}', message: 'Hello from ${moduleName}' });
});

module.exports.endpoint = '/${minModuleName}';
module.exports.router   = ${minModuleName}App;

`;

  const defaultPugFileTemplate = `
html
  head
    link(href='/static/css/design.css', rel='stylesheet')
    title= title
  body
    h1= message

`;
  
  const controllerTemplate = `
const app = require('express')();

class ${moduleName}Controller {
  
  constructor (mountpoint) {
    this.mountpoint = mountpoint;
  }
  
}

module.exports = ${moduleName}Controller;
  `;
  
  
  
  fs.mkdirSync(modulePath);
  fs.mkdirSync(`${modulePath}/models`);
  fs.mkdirSync(`${modulePath}/controllers`);
  fs.mkdirSync(`${modulePath}/views`);
  
  fs.writeFileSync(`${modulePath}/controllers/${moduleName}Controller.js`, controllerTemplate);
  fs.writeFileSync(`${modulePath}/views/default.pug`, defaultPugFileTemplate);
  fs.writeFileSync(`${modulePath}/index.js`, indexFileTemplate);
  
  console.log(`Module ${moduleName} created under ${modulePath}`);
}

newModule(moduleName);

module.exports = newModule;