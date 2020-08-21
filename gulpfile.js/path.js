const addPathPrefix = (prefix, value) => {
	if (value === null || value === undefined) return undefined;
	if (Array.isArray(value)) return value.map(e => (e.startsWith('!')) ? e.replace('!', `!${prefix}`) : `${prefix + e}`);
	return `${prefix + value}`;
}

const destProxyHandler = {
	get: (target, key) => addPathPrefix(prefix.dest, target[key])
}

const srcProxyHandler = {
	get: (target, key) => addPathPrefix(prefix.src, target[key])
}



const prefix = {
	dest: './public/',
	src: './src/'
}

let dest = {
	css: 'css',
	img: 'img',
	js: 'js',
	root: '',
}

let src = {
	css: [
		'css/styles.scss',
		'css/media/*.scss'
	],
	imgRaster: [
		'img/**/*.*',
		'!img/**/*.svg'
	],
	imgSvg: 'img/**/*.svg',
	js: 'js/**/*.js',
	jsApp: 'js/app.js',
	rootHtml: 'index.html',
	rootTxt: 'robots.txt',
}



dest = new Proxy(dest, destProxyHandler);
src = new Proxy(src, srcProxyHandler);



module.exports = {dest, src};
