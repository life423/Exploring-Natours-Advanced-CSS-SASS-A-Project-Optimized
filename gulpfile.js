import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin'

gulp.task('styles', function stylesTask(done) {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'));

    done();
});

gulp.task('images', function(done) {
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'));

    done();
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', gulp.series('styles'));
    gulp.watch('img/*', gulp.series('images'));
});