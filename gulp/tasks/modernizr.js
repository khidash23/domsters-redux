const gulp = require('gulp'),
  modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => gulp
  .src(['./app/assets/styles/**/*.css', './app/assets/js/**/*.js'])
  .pipe(modernizr({
    options: ['setClasses']
  }))
  .pipe(gulp.dest('./app/temp/js/')));
