// Imports
const cleanup = require('./cleanup');
const gulp = require('gulp');
const img = require('./img');
const js = require('./js');
const root = require('./root');
const sass = require('./sass');



exports.build = gulp.series(
	cleanup,
	sass.compressed,
	img.raster,
	img.svg,
	js.js,
	root.html,
	root.txt
);
