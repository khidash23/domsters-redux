/* eslint-disable import/no-extraneous-dependencies */
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function() {
  return del('./dist');
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp
    .src([
      './app/assets/images/**/*',
      '!./app/assets/images/icons',
      '!./app/assets/images/icons/**/*'
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp
    .src('./app/index.html')
    .pipe(usemin({
      js: []
    }))
      css: [function() {}, function() {}],
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
