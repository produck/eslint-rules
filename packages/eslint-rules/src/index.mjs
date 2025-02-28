/** @type {import('eslint').Linter.Config} */
export const config = {
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
};

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';

export function excludeGitIgnore(eslintConfigPath) {
	const __filename = fileURLToPath(eslintConfigPath);
	const __dirname = path.dirname(__filename);
	const gitignorePath = path.resolve(__dirname, '.gitignore');

	return includeIgnoreFile(gitignorePath);
}
