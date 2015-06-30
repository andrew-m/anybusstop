var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./out/css'));
});

gulp.task('copySource', function() {
    gulp.src('./src/html/**/*')
    .pipe(gulp.dest('./out'));
    gulp.src('./src/script/**/*')
    .pipe(gulp.dest('./out/script'));
});

gulp.task('default', ['styles','copySource']);
