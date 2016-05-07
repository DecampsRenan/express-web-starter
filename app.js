/**
 * Main entrance for the app
 * 
 * Should list and launch all
 * routes defined in controller's folder.
 */
let fs      = require('fs');
let express = require('express');
let app = express();

const controllersPath = `${__dirname}/app/modules`;

// 1. On récupère l'ensemble des dossiers du dossier controller
let controllers = fs.readdirSync(controllersPath);

// 2. Pour chaque controller, on ajoute la route correspondante
//    à l'application.
for ( controller of controllers ) {
  subModule = require(`${controllersPath}/${controller}`);
  app.use(subModule.endpoint, subModule.router);
}


module.exports = app;
