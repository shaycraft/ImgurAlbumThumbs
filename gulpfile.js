'use strict'

var gulp = require('gulp');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('bower', function() {
    gulp.src('bower_components/**/*.min.js')
        .pipe(flatten())
        .pipe(gulp.dest('js/vendor/'));
});

//Add bower dependencies in here.  Order matters.
gulp.task('vendor', function() {
    gulp.src([
            'js/vendor/angular.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('js/dist/'));
});

gulp.task('scripts', function() {
    return gulp.src('js/scripts/**/*.js')
        .pipe(concat('imguralbum.js'))
        .pipe(gulp.dest('js/dist/'))
        .pipe(rename('imguralbum.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/dist/'));
});


gulp.task('default', ['bower', 'vendor', 'scripts']);