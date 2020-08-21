const gulp = require('gulp');
const path = require('./path');
const rollup = require('gulp-rollup');
const terser = require('gulp-terser');



const js = () => {
	return gulp.src(path.src.js)
		.pipe(
			rollup({
				input: path.src.jsApp,
				format: 'umd',
			})
		)
		.pipe(terser())
		.pipe(gulp.dest(path.dest.js));
}

module.exports = {js};
