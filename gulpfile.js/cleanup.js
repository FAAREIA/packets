const del = require('del');
const gulp = require('gulp');
const path = require('./path');

const cleanup = () => del(`${path.dest.root}**/*`);

module.exports = cleanup;
