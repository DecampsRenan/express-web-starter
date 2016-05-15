const gulp    = require('gulp');
const sass    = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const filePaths = {
  css: {
    src:  `${__dirname}/assets/sass/`,
    dest: `${__dirname}/public/css/`,
  },
}

const preproc = [
  cssnano({
    /* Custom params goes here. See more at http://cssnano.co/optimisations/ */
    autoprefixer: { browsers: ['last 2 versions'] }
  }),
];

// For now, do nothing
gulp.task('default', () => {
  
});

// Compile sass files
gulp.task('sass', () => {
  gulp.src(`${filePaths.css.src}/design.sass`)
    .pipe(sass())
    .pipe(postcss(preproc))
    .pipe(gulp.dest(`${filePaths.css.dest}`));
});

// Watch and compile sass files 
gulp.task('sass:watch', () => {
  gulp.watch(`${filePaths.css.src}/**/*.sass`, ['sass']);
});

// For now, do nothing
gulp.task('dist', () => {
  
});