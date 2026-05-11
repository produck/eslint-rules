# @produck/eslint-rules

A collection of ESLint rules used internally by the Produck team to enforce
consistent coding style and code quality standards across projects.

## Features

The rule set enforces the following core conventions:

| Rule              | Value              | Description        |
| ----------------- | ------------------ | ------------------ |
| `indent`          | `2 spaces`         | Space indentation  |
| `linebreak-style` | `unix`             | Unix endings (LF)  |
| `quotes`          | `single`           | Single quotes      |
| `semi`            | `always`           | Require semicolons |
| `comma-dangle`    | `always-multiline` | Trailing commas    |

Inline ESLint configuration comments are disabled by default
(`noInlineConfig: true`) to maintain rule consistency.

Additionally, the `excludeGitIgnore()` utility is provided to automatically
sync ignore patterns from the project's `.gitignore` into the ESLint config.

## Installation

```bash
npm install @produck/eslint-rules --save-dev
```

Peer dependencies required:

- `eslint` >= 9.0.0
- `@eslint/config-helpers` >= 0.5.0

## Usage

### Basic

Create an `eslint.config.mjs` in your project and import `config` to apply
the Produck conventions:

```js
// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import * as ProduckEslint from "@produck/eslint-rules";

export default [
{
languageOptions: {
globals: {
...globals.browser,
...globals.node,
},
},
},
pluginJs.configs.recommended,
ProduckEslint.config,
];
```

### Syncing .gitignore

Use `excludeGitIgnore()` to automatically apply `.gitignore` patterns to ESLint,
preventing unnecessary linting of build artifacts, dependencies, etc.:

```js
// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import * as ProduckEslint from "@produck/eslint-rules";

export default [
{
languageOptions: {
globals: {
...globals.browser,
...globals.node,
},
},
},
pluginJs.configs.recommended,
ProduckEslint.config,
ProduckEslint.excludeGitIgnore(import.meta.url),
];
```

### With TypeScript

Combine with `typescript-eslint` for TypeScript projects:

```js
// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import * as ProduckEslint from "@produck/eslint-rules";

export default [
{ files: ["**/*.{js,mjs,cjs,ts}"] },
{
languageOptions: {
globals: {
...globals.browser,
...globals.node,
},
},
},
pluginJs.configs.recommended,
...tseslint.configs.recommended,
ProduckEslint.config,
ProduckEslint.excludeGitIgnore(import.meta.url),
];
```

## API

### `config`

- **Type:** `ESLint.Linter.Config`

A pre-defined ESLint flat config object containing all Produck team
conventions.

### `excludeGitIgnore(eslintConfigPath)`

- **Parameter:** `eslintConfigPath` (`string`) — Pass `import.meta.url` to
  locate the `.gitignore` file relative to the project root.
- **Returns:** `ESLint.Linter.Config` — A config object with the resolved
  ignore patterns.

## License

MIT

## Maintainer Notes

This package is maintained in a repository that serves as the source
implementation of Produck organization lint conventions.

Repository-level AI collaboration policy is documented in the repository root:

- `docs/ai-collaboration.md`
