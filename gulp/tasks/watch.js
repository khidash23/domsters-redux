let gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], () => gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream()));

gulp.task('scriptsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/*.html', () => {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  // watch for any changes to our js files
  watch('./app/assets/js/**/*.js', () => {
    gulp.start('scriptsRefresh');
  });
});
