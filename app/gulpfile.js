const {
  src, dest, watch, series, parallel,
} = require('gulp');
const postCss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');

// set file path variables.
const files = {
  htmlPath: './src/**/*.html',
  cssPath: './src/css/**/*.css',
  jsPath: './src/js/**/*.js',
};

// set css taskrunner.
function cssTaskRunner() {
  return src(files.cssPath)
    .pipe(postCss([autoPrefixer()]))
    .pipe(dest('dist/css'));
}

// set js taskrunner.
function jsTaskRunner() {
  return src(files.jsPath)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

// create cachebusting variable with time in milliseconds
const cbString = new Date().getTime();

// set cache-busting taskrunner.
function cacheBustTaskRunner() {
  return src(files.htmlPath)
    .pipe(replace(/cb=\d+/g, `cb=${cbString}`))
    .pipe(dest('dist'));
}

// set watch taskrunner.
function watchTaskRunner() {
  watch([files.cssPath, files.jsPath, files.htmlPath],
    parallel(cssTaskRunner, jsTaskRunner, cacheBustTaskRunner));
}

// default task configuration.
exports.default = series(
  parallel(cssTaskRunner, jsTaskRunner),
  watchTaskRunner,
);
