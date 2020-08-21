const gulp = require('gulp');
const path = require('./path');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('dart-sass');


const compressed = () => {
	return gulp.src(path.src.css)
		.pipe(
			sass({outputStyle: 'compressed'})
		)
		.pipe(gulp.dest(path.dest.css));
};

const watch = () => gulp.watch(path.src.css, ['sass']);



module.exports = {compressed, watch};
