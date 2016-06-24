var gulp = require('gulp');
var clean = require('gulp-clean');
var include = require('gulp-html-tag-include');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var importCss = require('gulp-import-css');
var browserSync = require('browser-sync').create();
//var minifyInline = require('gulp-minify-inline');

var fs = require('fs');


/*
// Static server
gulp.task('serve', function() {

	var files = [
      './prod/buildinfo'
   ];

    browserSync.init(files, {
        server: {
            baseDir: "./prod"
        }
    });
});

*/
/*
gulp.task('remake', function() {
    gulp.watch(['*.html', '*.css', './particles/*.h', './styles/*.h'], ['make']);
});
*/


// use default task to launch Browsersync and watch JS files
gulp.task('go', ['build'], function () {

	var files = [
      './prod/*.*'
    ];
	
    // Serve files from the root of this project
    browserSync.init(files, {
        server: {
            baseDir: "./prod"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(['*.html', '*.css', './particles/*.h', './styles/*.h'], ['watch']);
});


gulp.task('watch', ['build'], function() {

	//console.log('helloooo!');
	browserSync.reload;	
});


gulp.task('build', ['make'], function(){
	fs.writeFile('./prod/buildinfo', new Date(), {flag:'w'}, function(err) {
        if (err) throw err;
        console.log('-- buildinfo created');
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

  /*  fs.writeFile('./prod/buildinfo', new Date(), {flag:'w'}, function(err) {
        if (err) throw err;
        console.log('-- buildinfo created');
    }); */
		
    // console.log('MAKE task finished') ; 
});

gulp.task('clean', function(){
  return gulp.src(['prod/*'], {read:false})
  .pipe(clean());
});

/*

gulp.task('make-html', ['make-css'], function() {

	gulp.src('*.html')
		.pipe(include())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('prod'));
// + 		.pipe(htmlmin({collapseWhitespace: true}))

});

gulp.task('make-css', ['make-img'], function() {

	gulp.src('*.css')
		.pipe(importCss())
		.pipe(cleanCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('prod'));
// + 		.pipe(cleanCss({compatibility: 'ie8'}))

});

gulp.task('make-img', ['clean'], function() {

	gulp.src('images/*')
		.pipe(gulp.dest('prod/images')); 

});

*/




