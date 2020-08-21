const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const path = require('./path');



const raster = () => gulp.src(path.src.imgRaster).pipe(gulp.dest(path.dest.img));

const svg = () => {
	return gulp.src(path.src.imgSvg)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				minifyCSS: true
			})
		)
		.pipe(gulp.dest(path.dest.img));
}



module.exports = {raster, svg};
