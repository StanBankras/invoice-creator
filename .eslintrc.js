module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [ 'plugin:vue/essential', 'google' ],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'max-len': [ 2, 120 ],
		'keyword-spacing': [
			'error',
			{
				overrides: {
					if: { after: false },
					for: { after: false },
					while: { after: false }
				}
			}
		],
		'require-jsdoc': 0,
		'object-curly-spacing': [ 'error', 'always' ],
		'comma-dangle': [ 'error', 'never' ],
		'linebreak-style': 0
	}
};
