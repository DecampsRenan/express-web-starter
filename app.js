/**
 * Main entrance for the app
 * 
 * Should list and launch all
 * routes defined in controller's folder.
 */

const appRoot = __dirname + '/app';

const fs  = require('fs');
const app = require(`${appRoot}/core`);

// 1. Get the controllers defined in the controller folder
const controllersPath = `${appRoot}/modules`;
const controllers     = fs.readdirSync(controllersPath);

// 2. For each controller, we mount the exported path to the main app
for ( controller of controllers) {
  
  /* Get the index.js file exporting the config of the submodule */
  const subModule = require(`${controllersPath}/${controller}`);
  
  /* Define the views folder */
  subModule.app.set('views', `${controllersPath}/${controller}/views`);
  
  /* Mount the subModule to the main app at the specified endpoint */
  app.use(subModule.mountpoint, subModule.app);
  
  console.log(`Mounting [${controller}] controller on [${subModule.mountpoint}]`);
}

module.exports = app;
