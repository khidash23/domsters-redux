var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/*.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  // watch for any changes to our js files
  watch('./app/assets/js/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});
