const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const hexrgba = require('postcss-hexrgba');
const mixins = require('postcss-mixins');

gulp.task('styles', () => gulp
  .src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
  .on('error', function (error) {
    console.log(error.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles')));
