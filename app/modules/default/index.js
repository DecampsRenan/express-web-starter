/**
 * Here is a file considered as a router;
 * bind your route with .get / .post / etc ... to your controllers method for more flexibility.
 * 
 * Take a look to this example to see how it works.
 */

const DefaultController = require('./controllers/DefaultController');

const defaultController = new DefaultController('/');

defaultController.add('get', '/', (req, res) => {
  res.render('default', { title: 'My Awesome App', message: 'See ? <br/>It works :D !' });
});

module.exports = defaultController;
