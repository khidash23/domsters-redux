var gulp = require('gulp'),
  webpack = require('webpack');

gulp.task('scritps', function(callback) {
  // tell webpack where our config file is
  webpack(require('../../webpack.config.js'), function() {
    console.log('Webpack completed');
    callback();
  });
});
