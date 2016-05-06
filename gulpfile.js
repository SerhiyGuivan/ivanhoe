var gulp =          require("gulp"),
    autoprefixer =  require("gulp-autoprefixer"),
    jade =          require("gulp-jade"),
    stylus =        require("gulp-stylus"),
    uglify =        require("gulp-uglify"),
    source =        require('vinyl-source-stream'),
    bootstrap =     require('bootstrap-styl'),
    browserify =    require('browserify');

gulp.task('styles', function(){
   return gulp.src('./assets/stylus/*.styl')
       .pipe(stylus({
           use: bootstrap(),
           'include css': true,
           compress: true
       }))
       .pipe(autoprefixer({
           browsers: ['last 10 versions'],
           cascade: false
       }))
       .pipe(gulp.dest('./public/css'));
});

gulp.task('templates', function(){
    return gulp.src('./assets/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/views'))
});
gulp.task('scripts', function(){
    browserify('./assets/js/main.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'));
});
gulp.task('watch', function(){
    gulp.watch('./assets/stylus/*.styl', ['styles']);
    gulp.watch('./assets/jade/*.jade', ['templates']);
    gulp.watch('./assets/js/*.js', ['scripts']);
});

gulp.task('default', ['watch', 'styles', 'templates', 'scripts']);