import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as ProduckEslint from './src/index.mjs';

export default [
	{files: ['**/*.{js,mjs,cjs}']},
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	ProduckEslint.config,
	ProduckEslint.excludeGitIgnore(import.meta.url),
];
