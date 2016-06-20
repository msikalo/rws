var gulp = require('gulp');
var clean = require('gulp-clean');
var include = require('gulp-html-tag-include');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var importCss = require('gulp-import-css');


//var minifyInline = require('gulp-minify-inline');


var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./prod"
        }
    });
});


gulp.task('make', ['clean'], function() {

	gulp.src('*.html')
		.pipe(include())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('prod'));
// + 		.pipe(htmlmin({collapseWhitespace: true}))

	gulp.src('*.css')
		.pipe(importCss())
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('prod'));
// + 		.pipe(cleanCss({compatibility: 'ie8'}))

	gulp.src('images/*')
		.pipe(gulp.dest('prod/images'));
				
     console.log('MAKE task finished') ; 
});


gulp.task('clean', function(){
  return gulp.src(['prod/*'], {read:false})
  .pipe(clean());
});


