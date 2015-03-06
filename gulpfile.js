var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
  gulp.src('./_js/*.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});
