const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Define the 'styles' task as an asynchronous function
gulp.task('styles', function stylesTask(done) {
    gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'));

    done();
});

// Define the 'watch' task
gulp.task('watch', function() {
<<<<<<< HEAD
    gulp.watch('./sass/main.scss', gulp.series('styles'));
=======
    gulp.watch('src/**/*.scss', gulp.series('styles'));
>>>>>>> 4e6bbbb... gulp is working a little, I think
});
