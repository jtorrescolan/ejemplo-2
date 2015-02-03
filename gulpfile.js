var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	b_sync = require('browser-sync');

gulp.task('stylus', function(){
	gulp.src('app/stylus/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('public/css'));
});

gulp.task('jade', function(){
	gulp.src('app/template/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function(){
	b_sync({
		server: {
			baseDir: './public'
		}
	});
});

gulp.task('frontend', ['browser-sync'], function(){
	gulp.watch('app/stylus/*.styl', ['stylus', b_sync.reload]);
	gulp.watch('app/stylus/*/*.styl', ['stylus', b_sync.reload]);
	gulp.watch('app/template/*.jade', ['jade', b_sync.reload]);
});