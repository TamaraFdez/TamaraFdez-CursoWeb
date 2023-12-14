const {src, dest, watch, series} = require ("gulp")
const sass = require('gulp-sass')(require ('sass'))

function buildStyles(){
    return src('**/*.scss')
        .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
       
        .pipe(dest('dist/css'))
} 

function watchTask(){
    watch(['**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
