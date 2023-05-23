const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function stylesTask(done) {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'));

    done();
});


gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', gulp.series('styles'));
});
