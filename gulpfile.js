var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp
        .src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task(
    'serve',
    gulp.series('sass', function() {
        browserSync.init({
            server: './app/',
        })

        gulp
            .watch('app/scss/**/*.scss', gulp.series('sass')).on('change', browserSync.reload)
        gulp.watch('app/*.html').on('change', browserSync.reload)
        gulp.watch('app/*.js').on('change', browserSync.reload)
    })
)
gulp.task('default', gulp.series('serve'))