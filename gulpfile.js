var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(done) {
    gulp.src(["node_modules/bootstrap/scss/bootstrap.scss","src/scss/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());

    done();
});

gulp.task('js', function (done) {
    gulp.src(['node_modules/bootstrap/dist/js/bootsctrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'js/*js'])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
    
    done();
});

// Static Server + watching scss/html files
gulp.task('serve', function(done) {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"], gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));