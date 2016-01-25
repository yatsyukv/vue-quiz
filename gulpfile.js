var gulp = require('gulp');


gulp.task('default', ['vue', 'vue-resource', 'bootstrap']);

gulp.task('vue', function() {
    return gulp.src('./node_modules/vue/dist/*.js')
        .pipe(gulp.dest('./pub/assets/js/lib/vue'));
});

gulp.task('vue-resource', function() {
    return gulp.src('./node_modules/vue-resource/dist/*.js')
        .pipe(gulp.dest('./pub/assets/js/lib/vue-resource'));
});

gulp.task('bootstrap', function() {
    return gulp.src('./node_modules/bootstrap/dist/css/*.css')
        .pipe(gulp.dest('./pub/assets/css/lib/bootstrap'));
});