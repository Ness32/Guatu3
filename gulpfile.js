//
//	Load Dependencies
//
var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var less = require('gulp-less');
var lessClean = require('less-plugin-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var embedlr = require('gulp-embedlr');
var livereload = require('gulp-livereload');
var express = require('express');
var bower = require('gulp-bower');

//
//	Server Setup
//
gulp.task('server-init', function(){
	var server = express();
	// Run the watch task, to keep taps on changes
	gulp.run('watch');
	require('./shell/server')(express, server);
});

//
//	Livereload
//
var tinylr
gulp.task('livereload', function(){
	tinylr = require('tiny-lr')();
	tinylr.listen(4002);
});

function notifyLive(event){
	var fileName = require('path').relative(__dirname, event.path);

	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
};
// JSHint task
gulp.task('lint', function(){
	gulp.src('./app/modules/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(livereload());
});

//
// Clean Task
//
gulp.task('clean', function(){
	gulp.src('/www/*')
		.pipe(clean({force: true}));
});
//
//	Browserify Task
//
gulp.task('browserify', function(){
	gulp.src(['app/modules/main.js'])
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('www/js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('www/js'))
		.pipe(livereload());
});

//
//	Bower
//
gulp.task('bower', function(){
	return bower('./bower_components')
		.pipe(gulp.dest('www/libs'))
});

//
//	Views Task
//
gulp.task('views', function(){
	// Get Index
	gulp.src('app/index.html')
		.pipe(gulp.dest('www/'))
		.pipe(livereload());

	gulp.src('./app/views/**/*.html')
		.pipe(gulp.dest('www/views'))
		.pipe(livereload());
});

//
//	Less Task
//
var cleancss = new lessClean({advanced: true});

gulp.task('less', function(){
	gulp.src('app/less/app.less')
		.pipe(less({
			plugins: [cleancss]
		}))
		.pipe(gulp.dest('./www/css'))
		.pipe(livereload());
});
//
//	Nodemon
//
gulp.task('nodemon', function(){
	nodemon({
		script: './shell/server',
		ext: 'jade js',
	}).on('restart', function(){
		console.log('Server Restart Success');
	});
});

//
//	Watch Task
//
gulp.task('watch', ['lint'], function(){
	livereload.listen();
	gulp.watch(['app/modules/*.js', 'app/modules/**/*.js'], ['lint', 'browserify']);
	gulp.watch(['app/index.html', 'app/views/**/*.html'], ['views']);
	gulp.watch(['app/less/app.less', 'app/less/**/*.less'], ['less']);
	gulp.watch(['server/views/layout.jade', 'server/views/**/*.jade']);
	gulp.watch(['www/*.html', 'www/views/*.html'], notifyLive);
	gulp.watch('www/js/bundle.js', notifyLive);
	gulp.watch(['www/css/app.css', 'www/css/*.css'], notifyLive);
});

gulp.task('default', ['server-init', 'livereload' ,'lint', 'browserify', 'views', 'watch', 'less' , 'nodemon'], function(){

});
