const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('compile:sass', () => {
    return gulp.src('app/sass/styles.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
});

gulp.task('serve', ['browserSync'], function (){
    gulp.watch('app/sass/styles.sass', ['compile:sass']); 
});