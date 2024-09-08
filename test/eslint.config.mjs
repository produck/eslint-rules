import globals from 'globals';
import pluginJs from '@eslint/js';
import ProduckEslint from '@produck/eslint-rules';

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	ProduckEslint,
];
