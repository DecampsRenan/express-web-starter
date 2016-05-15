
const express     = require('express');
const compression = require('compression');
const helmet      = require('helmet');
const optimus     = require('connect-image-optimus');
const session     = require('express-session');
const path        = require('path');

const appRoot = path.join(__dirname, '..');

/** Config files (JSON formatted) */
const security      = require(`${appRoot}/config/security`);
const sessionConfig = require(`${appRoot}/config/sessions`);

// Get instance of the main app
const app = express();

app.enable('case sensitive routing');

/** Using pug template engine (previously jade) */
app.set('view engine', 'pug');

// Defining main middlewares

/** Using helmet middleware for a more secure app */
app.use(helmet());

// TODO: Aouter un fichier de configuration pour la gestion des sessions
/** Adding session support - cf. sessions.json config file */
app.use(session({ 
  secret: sessionConfig.secret,
  resave: false,
  saveUninitialized: true
}));

/** Optimize image serving by switches to webp/jpegxr if possible */
app.use(optimus());

/** Allow requests compressions */
app.use(compression());

/** Serve static content from the public app folder. */
app.use('/static', express.static(`${appRoot}/../public`));

module.exports = app;
