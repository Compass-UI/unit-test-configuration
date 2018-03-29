var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var watch = require('gulp-watch');
var open = require('gulp-open');


gulp.task('jasmine', function() {
  var filesForTest = ['src/**/*.js', 'spec/**/*Spec.js'];
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('open', function(){
  gulp.src('./unit-testing.html')
  .pipe(open());
});

gulp.task('headless', function() {
  return gulp.src(['src/**/*.js', 'spec/**/*Spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({driver: 'phantomjs'}));
});


gulp.task('test', ['jasmine', 'open']);
