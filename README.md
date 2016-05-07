# Express Web Starter

This repo has be made because I've never be satisfied with the express-generator template.
So I created one I can extend and scale as easier as possible.

This project is in progress.

TODO:

- [ ] complete gulp tasks
- [ ] add default code to te default module
- [ ] make the app.js works :D
- [ ] improve my english
- [ ] improve my git skills

## Architecture

```
 .
 |
 +-- assets                   // Dev files; compiled to the public folder (.sass, .coffee...)
 |    |
 |    +-- sass
 |    +-- js
 |
 +-- bin
 +-- app
 |    |
 |    +-- config              // App config files
 |    +-- modules             // Most important folder :D app logic goes here
 |    |    |
 |    |    +-- default        // default controller, serve the '/' URL of your app
 |    |        |
 |    |        +-- controller // logic of the module
 |    |        +-- view       // views  (are you kidding ... ?)
 |    |        +-- model      // models (really dude, I'll be lost without your explanations...)
 |
 |
 +-- public                   // public files, can be accessed by a brower
 |    |
 |    +-- res                 // img, fonts, etc...
 |    +-- css                 // minified css files
 |    +-- js                  // minified js files
 |
 +-- test                     // Test folder
 +-- app.js                   // entry point of the app
```

## Built-in dev tools

If you want you fully fonctionnal, just type in your favorite term: `npm install`

That's it :D !

To launch the server : `npm start`
To launch tests : `npm test`

more is comming ... ;)

### Front-end

- [Pug](https://github.com/pugjs/pug)

### Back-end

Here are usefull middlewares included: 

- [Morgan](https://github.com/expressjs/morgan)
- [Compression ](https://github.com/expressjs/compression)
- [Gulp](http://gulpjs.com/)
- [LibSass (with gulp)](https://github.com/dlmanning/gulp-sass)
- [PostCSS (with gulp)](https://github.com/postcss/gulp-postcss)
- [CSSNano (with gulp)](http://cssnano.co/)

### Tests

- [Faker](https://github.com/marak/Faker.js/)
- [Mocha](https://mochajs.org/)
- [sinon](http://sinonjs.org/)
- [chai](http://chaijs.com/)

**Feel free to fork and improve it ! Share your love <3**