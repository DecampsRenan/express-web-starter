let index = require('express').Router();

// Point d'accès de l'application
const endpoint = '/'

index.get('/', (req, res) => {
  res.send('Coucoud de l\'index :D');
});

// Convention naming for easy inclusion with the MainController
module.exports.endpoint = endpoint;
module.exports.router   = index;
