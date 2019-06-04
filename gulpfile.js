const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect-php");
const browserSync = require("browser-sync");

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

  connect.server({}, () => {
    browserSync({ proxy: "127.0.0.1:8000" });
  });

  gulp.watch("./assets/scss/**/*.scss", css);

  gulp.watch(["./**/*.html", "./index.php", "./assets/js/**/*.js"], reload);
});

exports.css = css;
