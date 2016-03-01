var gulp = require('gulp'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    argv = require('yargs').argv,
    nodemon = require('gulp-nodemon');

gulp.task('buildSrc', function() {
     return gulp.src(['src/common.js', 'src/components/**/*.js', 'src/application.js'])
        .pipe(babel())
        .pipe(concat('all_app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('packageSrc', ['buildSrc'], function() {
    return gulp.src('dist/**/*.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !argv.production
        }))                      
        .pipe(minify())
        .pipe(uglify())
        .pipe(rename('all_app_min.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['buildSrc']);
});

gulp.task('run', ['packageSrc'], function() {
    nodemon({
        script: 'server.js',
        ext: 'html',
        env: {'NODE_ENV': 'development'}
    });   
});

gulp.task('default', ['run']);
