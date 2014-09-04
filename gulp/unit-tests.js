'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

gulp.task('lint', function() {
  return gulp.src('./app/scripts/**/*.js')
             .pipe($.jshint())
             .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['lint'], function() {
  var bowerDeps = wiredep({
    directory: 'app/bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'app/scripts/**/*.js',
    'test/unit/**/*.js'
  ]);

  return gulp
           .src(testFiles)
           .pipe($.karma({
             configFile: 'test/karma.conf.js',
             action: 'run'
           }))
           .on('error', function(err) {
             // Make sure failed tests cause gulp to exit non-zero
             throw err;
           });
});