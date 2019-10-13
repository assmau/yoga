var gulp = require('gulp'),
	  watch = require('gulp-watch'),
	  sass = require('gulp-sass'),
	  rigger = require('gulp-rigger'),
	  image = require('gulp-image');



// Gulp Watch for SASS
gulp.task('watch', function () {
    return watch('src/assets/**/*.scss', { ignoreInitial: false })
        .pipe(gulp.dest('dest/assets/css'));
});

gulp.task('sass:watch', function () {
  return gulp.src('src/assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/assets/css'));
});


// Gulp Rigger
gulp.task('index', function() {
	return watch('index.html', {ignoreInitial:false})
	.pipe(gulp.dest('dest/'));
})



gulp.task('rigger:index', function() {
	gulp.src('index.html')
	.pipe(rigger())
	.pipe(gulp.dest('dest/'));
})

