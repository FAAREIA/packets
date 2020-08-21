const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const path = require('./path');



const html = () => {
	return gulp.src(path.src.rootHtml)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				minifyCSS: true,
				removeComments: true
			})
		)
		.pipe(gulp.dest(path.dest.root));
}

const txt = () => gulp.src(path.src.rootTxt).pipe(gulp.dest(path.dest.root));



module.exports = {html, txt};