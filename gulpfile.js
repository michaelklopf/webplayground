var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var using = require('gulp-using');

gulp.task('browserify', function() {
    gulp.src('static/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(using())
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy', function() {
    gulp.src('views/flux.html')
    .pipe(using())
      .pipe(gulp.dest('./dist'));
});

gulp.task('default',['browserify', 'copy']);

gulp.task('watch', function() {
    gulp.watch('static/js/*.*', ['default']);
});
