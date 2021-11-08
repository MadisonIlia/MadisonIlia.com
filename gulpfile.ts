import * as gulp from 'gulp';
import * as ejs from 'gulp-ejs';
import * as server from 'gulp-server-livereload';
import * as rimraf from 'rimraf';

function clean(done) {
    rimraf('dist', {}, done);
}

function templates() {
    return gulp.src('src/*.html')
        .pipe(ejs({

        }))
        .pipe(gulp.dest('./dist'))
}

function assets() {
    return gulp.src('public/**/*')
        .pipe(gulp.dest('dist'));
}

const build = gulp.series(
    clean,
    gulp.parallel(
        templates,
        assets
    )
);

function watch() {
    gulp.watch('src/**/*', templates);
    gulp.watch('public/**/*', assets);
}

function serve() {
    gulp.src('dist')
        .pipe(server({
            livereload: true,
            open: true,
            host: '0.0.0.0'
        }))
}

gulp.task('start', gulp.series(
    build,
    gulp.parallel(
        watch,
        serve
    )
));

gulp.task('build', build);