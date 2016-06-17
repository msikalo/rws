var gulp = require('gulp');
var clean = require('gulp-clean');
var include = require('gulp-html-tag-include');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var importCss = require('gulp-import-css');


//var minifyInline = require('gulp-minify-inline');


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



/*
var watcher = gulp.watch('*.*', ['foo']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
*/

/*

gulp.task('default', function() {

   console.log('GULP DEFAULT task started') ;
  // place code for your default task here
});


gulp.task('css', function() {
  gulp.src('*.css')
	.pipe(gulp.dest('prod'))
});

gulp.task('images', function() {
  gulp.src('images/*')
	.pipe(gulp.dest('prod/images'))
});


gulp.task('include', function() {
  gulp.src('*.html')
	.pipe(include())
	.pipe(gulp.dest('prod'))
});



gulp.task('maked', ['clean', 'include', 'css', 'images' ], function() {
     console.log('MAKE task finished') ; 
});

*/






//var uglify = require('gulp-uglify');
//.pipe(htmlmin({collapseWhitespace: true}))
//.pipe(minifyInline())
//		.pipe(uglify())


/*

var rename = require('gulp-rename');

gulp.task('rn', function() {
    return gulp.src('*')
        .pipe(rename(function (path) {
    		path.basename += "-goodbye";
    	     }))
        .pipe(gulp.dest('dist-rn'));
}); */