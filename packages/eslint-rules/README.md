# @produck/eslint-rules

Some basic coding standards.

## Usage

```js
// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import ProduckEslint from '@produck/eslint-rules';

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	ProduckEslint,
];
```
