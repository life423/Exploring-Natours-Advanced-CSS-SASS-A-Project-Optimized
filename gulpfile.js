import gulp from "gulp";
import sassCompiler from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";

const sass = gulpSass(sassCompiler);

gulp.task("styles", function stylesTask(done) {
  gulp
    .src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./css"));

  done();
});

gulp.task("images", function (done) {
  gulp.src("./img/*").pipe(imagemin()).pipe(gulp.dest("./img-min"));
  done();
});

gulp.task("watch", function () {
  gulp.watch("sass/**/*.scss", gulp.series("styles"));
  
});
