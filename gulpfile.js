const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

sass.compiler = require('sass');

const stylesConfig = {
  sass: {
    outputStyle: 'expanded',
    includePaths: 'node_modules'
  },
  postcss: [
    autoprefixer()
  ]
};

gulp.task('styles', function() {
  return gulp
    .src('./src/**/*.scss')
    .pipe(sass(stylesConfig.sass).on('error', sass.logError))
    .pipe(postcss(stylesConfig.postcss))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch(
    './src/**/*.scss',
    gulp.series('styles')
  );
});

