module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	rules: {
		'indent': [2, 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 0,
	},
};
