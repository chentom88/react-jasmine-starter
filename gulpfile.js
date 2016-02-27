var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    argv = require('yargs').argv;

gulp.task('buildSrc', function() {
     return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(concat('all_app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('packageSrc', function() {
    return gulp.src('dist/**/*.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !argv.production
        }))                      
        .pipe(minify())
        .pipe(uglify())
        .pipe(rename('all_app_min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['buildSrc']);
});

gulp.task('default', ['buildSrc', 'packageSrc']);
