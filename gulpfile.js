const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function reload(done) {
  browserSync.reload();
  done();
}

function css() {
  return gulp
    .src("./assets/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .on("error", sass.logError)
    .pipe(gulp.dest("./assets/css"))
    .pipe(browserSync.stream());
}

gulp.task("watch", () => {
  css();

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("./assets/scss/**/*.scss", css);

  gulp.watch(["./**/*.html", "./assets/js/**/*.js"], reload);
});

exports.css = css;
