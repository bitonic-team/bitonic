'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var dist = false;
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('clean', del.bind(null, ['public', '.tmp']));

gulp.task('copy', function() {
    gulp.src(['client/bower_components/**/*'], {base: './client'})
        .pipe(gulp.dest('public'));
    gulp.src(['client/assets/**/*'], {base: './client/assets'})
        .pipe(gulp.dest('public'));

    gulp.src(['client/index.html'], {base: './client'})
        .pipe(gulp.dest('public'));
});

gulp.task('templates', function() {
    return gulp.src('client/app/**/*.html')
        .pipe($.if (dist, $.minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            })))
        .pipe($.ngHtml2js({
            moduleName:"bitonic",
        }))
        .pipe($.concat('template.js'))
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('libs.scripts', function() {
    var bowerJs = require('wiredep')().js;
    console.log(bowerJs);
    // TODO ad other_components files after ngmin
    return gulp.src(bowerJs)
        .pipe($.concat('libs.js'))
        .pipe($.
            if (dist, $.uglify()))
        .pipe(gulp.dest('public'));
});

gulp.task('app.scripts', function() {
    return gulp.src([
            'client/app/app.js',
            '.tmp/template.js',
            'client/app/**/*.js',
            'client/components/**/*.js',
        ])
        .pipe($.concat('app.js'))
        // pre-minifier ?
        .pipe($.
            if (dist, $.ngmin()))
        // real minifier ?
        .pipe($.
            if (dist, $.uglify()))
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function(e) {
    return gulp.src(['client/app/app.less', 'client/app/**/*.less'])
        .pipe($.concat('app.css'))
        .pipe($.less())
        .on("error", $.notify.onError('Error: <%= error.message %>'))
        .on("error", function (err) {
            this.emit('end');
        })
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.
            if (dist, $.minifyCss()))
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['clean'], function(cb) {
    runSequence(['copy', 'templates', 'libs.scripts', 'styles'], 'app.scripts', cb);
});
gulp.task('template2', ['templates'], function(cb) {
    runSequence('app.scripts', cb);
});

gulp.task('watch', ['default'], function() {
    gulp.watch([
        'public/**/*',
        '!public/bower_components',
    ], $.livereload.changed);

    gulp.watch(['client/app/**/*.js'], ['app.scripts']);
    gulp.watch(['client/app/**/*.html'], ['template2']);
    gulp.watch(['client/index.html'], function() {
        gulp.src(['client/index.html'], {base: './client'})
        .pipe(gulp.dest('public'));
    });
    gulp.watch(['client/app/**/*.less'], ['styles']);
});