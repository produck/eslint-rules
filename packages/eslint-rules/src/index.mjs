/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
export default {
	linterOptions: {
		noInlineConfig: true,
	},
	rules: {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
	},
	excludedFiles: [
		'**/*.ts',
	],
};
