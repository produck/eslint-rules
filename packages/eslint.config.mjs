import globals from 'globals';
import pluginJs from '@eslint/js';
import CurrentRules from './eslint-rules/src/index.mjs';

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	CurrentRules,
];
