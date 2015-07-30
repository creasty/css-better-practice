'use strict';

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var compass      = require('gulp-compass');


gulp.task('server', function() {
    browserSync({
        server: {
            ui:      false,
            port:    5000,
            baseDir: './public',
        },
        files: [
            './public/**/*.html',
            './public/**/*.css',
        ],
    });
});

gulp.task('sass', function () {
    gulp.src('./scss/**/app.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file: './compass.rb',
            sass:        './scss',
            css:         './public/css',
            comments:    true,
            style:       'expanded',
            bundle_exec: true,
        }))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['sass', 'server'], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});
