# Express Web Starter

This repo has be made because I've never be satisfied with the express-generator
template. So I created one I can extend and scale as easier as possible.

This project is in progress.

<!-- TOC depthFrom:2 depthTo:6 withLinks:true orderedList:false updateOnSave:true -->

- [TODO](#todo)
- [Architecture](#architecture)
- [Built-in dev tools](#built-in-dev-tools)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
    - [Gulp tasks](#gulp-tasks)
    - [Tests](#tests)

<!-- /TOC -->

## TODO

- [ ] complete gulp tasks
- [x] add default code to te default module
- [ ] make the code Object Oriented (thanks to ES6)
- [x] make the app.js works :D
- [ ] improve my english
- [ ] improve my git skills

## Architecture

Here is the basic file tree of the template (it's more like a framework, isn't it.. ?)  
*Note: just the main files/folders are shown.*

```text
 .
 |
 +-- app
 |    |
 |    +-- config              // App config files
 |    +-- core                // Core of the template
 |    |    |
 |    |    +-- cmd            // Contains the command executed with your term (like: npm run new:module ModuleName)
 |    |    +-- controllers    // Contains the default Controller (BaseController). Every controller should extend it.
 |    |
 |    +-- modules             // Most important folder :D app logic goes here
 |         |
 |         +-- default        // default controller, serve the '/' URL of your app
 |             |
 |             +-- controller // logic of the module
 |             +-- view       // views  (are you kidding ... ?)
 |             +-- model      // models (really dude, I'll be lost without your explanations...)
 |
 +-- assets                   // Dev files; compiled to the public folder (.sass, .coffee...)
 |    |
 |    +-- sass
 |    +-- js
 |
 +-- bin
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

If you want your app fully fonctionnal, just type in your favorite term: `npm install`

That's it :D !

To launch the server : `npm start`  
To launch tests : `npm test`

more are comming ... ;)

### Front-end

- [Pug](https://github.com/pugjs/pug)

### Back-end

Here are usefull middlewares included: 

- [Morgan](https://github.com/expressjs/morgan)
- [Compression ](https://github.com/expressjs/compression)

### Gulp tasks

| Gulp command            | Task(s)                             | Implemented? |
| ----------------------- | ----------------------------------- |: ---------- :|
| `gulp`                  | - compile & minify CSS (watch mode) |     [ ]      |
| `gulp sass`             | - compile sass and minify           |     [x]      |
| `gulp sass:watch`       | - compile sass (watch mode)         |     [x]      |
| `gulp dist`             | - make a distributable of the app   |     [ ]      |

Extensions:

- [Gulp](http://gulpjs.com/)
- [LibSass (with gulp)](https://github.com/dlmanning/gulp-sass)
- [PostCSS (with gulp)](https://github.com/postcss/gulp-postcss)
- [CSSNano (with gulp)](http://cssnano.co/)

### Tests

- [Faker](https://github.com/marak/Faker.js/)
- [Mocha](https://mochajs.org/)
- [sinon](http://sinonjs.org/)
- [chai](http://chaijs.com/)

And... **Feel free to fork and improve it ! Share your love :heart:**
