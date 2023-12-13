const {src, dest, watch, series} = require ("gulp")
const sass = require('gulp-sass')(require ('sass'))

function buildStyles(){
    return src('Nanostyler/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(purgecss({content:['dist/*.html']}))
        .pipe(dest('dist/css'))
} 

function watchTask(){
    watch(['Nanostyler/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
