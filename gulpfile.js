var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

var DEST = 'build/';

gulp.task('default', function() {
  return gulp.src('public/js/*.js')
    .pipe(gulp.dest(DEST + "minified_js/"))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST + "minified_js/"));
});