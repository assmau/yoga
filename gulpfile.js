var gulp = require('gulp'),
	  watch = require('gulp-watch'),
	  sass = require('gulp-sass');



gulp.task('watch', function () {
    return watch('src/assets/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('dest/assets/css'));
});

gulp.task('sass:watch', function () {
  return gulp.src('src/assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/assets/css'));
});