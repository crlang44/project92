var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var fancy_log = require('fancy-log');
var buffer = require('vinyl-buffer');
var connect = require('gulp-connect');
var paths = {
    pages: ['src/*.html']
};

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}


gulp.task('package', gulp.series(gulp.parallel('copy-html'), function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
}));

/*
Web server to test app
*/
gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['.', 'dist']
    });
});
/*
Automatic Live Reload
*/
gulp.task('livereload', function() {
    gulp.src(['dist/*'])
    .pipe(watch(['dist/styles/*']))
    .pipe(connect.reload());
});

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle, 'webserver'));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);