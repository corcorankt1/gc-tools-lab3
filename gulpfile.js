var gulp = require('gulp');
var concat = require('gulp-concat');
var csscomb = require('gulp-csscomb');
var browserSync = require('browser-sync').create();

var stylus = require('gulp-stylus');
gulp.task('styles', function (){
  return gulp.src('styles.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./'));

});

gulp.task('scripts' , function () {
  return gulp.src(['jquery-2.2.3.min.js', 'script.js'])
  .pipe(concat ('all.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('cleancss', ['styles'], function(){
  return gulp.src('styles.css')
  .pipe(csscomb())
  .pipe(gulp.dest('./'));
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
