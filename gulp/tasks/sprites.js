var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename");

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("createSprite", function() {
  return (gulp
      // grab all the svgs inside the icons folder
      .src("./app/assets/images/icons/**/*.svg")
      // use the template var
      .pipe(svgSprite(config))
      // output generated sprite to time file
      .pipe(gulp.dest("./app/temp/sprite/")) );
});

gulp.task("copySpriteCSS", ["createSprite"], function() {
  return (gulp
      // grab all the sprites generated
      .src("./app/temp/sprite/css/*.css")
      // rename to partial `_sprites`
      .pipe(rename("_sprite.css"))
      // copy file and move copy to modules directory
      .pipe(gulp.dest("./app/assets/styles/modules")) );
});

gulp.task("icons", ["createSprite", "copySpriteCSS"]);
