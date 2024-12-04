# eslint-config-angellist

Sharable ESLint, Prettier and Rubocop configuration for AngelList.

### Usage

#### For React and TypeScript projects:

```sh
cd ../frontend-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.1.6' \
  '@typescript-eslint/eslint-plugin' \
  '@typescript-eslint/parser' \
  'eslint-config-airbnb-typescript' \
  'eslint-config-prettier' \
  'eslint-plugin-import' \
  'eslint-plugin-jsx-a11y' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'

ln -s ./node_modules/eslint-config-angellist/.prettierrc.js .prettierrc.js
```

Modify your `.eslintrc.js` config:

```js
module.exports = {
  extends: ['angellist'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
```

#### For Ruby projects:

We use [github.com/angellist/rubocop-angellist](https://github.com/angellist/rubocop-angellist).

### Pre-commit hooks

You can also install `husky` to run pre-commit hooks and `lint-staged` to run different linters for changed files.

Add this to your `package.json`:

```json
"devDependencies": {
  "husky": "^6.0.0",
  "lint-staged": "^10.5.4"
},
"lint-staged": {
  "./app/javascript/**/*.{ts,tsx}": [
    "prettier --write",
    "eslint --fix"
  ],
  "*.rb": [
    "bundle exec rubocop --autocorrect --fail-level error --force-exclusion"
  ]
},
"scripts": {
  "prepare": "husky install"
}
```

Run `lint-staged` on pre-commit hooks in `.husky/pre-commit`:

```sh
#!/bin/sh

. "$(dirname "$0")/_/husky.sh"

yarn lint-staged
```

### Development

To test the package locally:

```sh
yarn install
yarn link

cd ../another-project
yarn link eslint-config-angellist
```

To clean up:

```sh
yarn unlink

cd ../another-project
yarn unlink eslint-config-angellist
yarn install
```

### Releasing

To release a new version:

* Update the version in `package.json`
* Update the version in these README instructions
* Update [CHANGELOG](CHANGELOG.md)
* Add a new git tag

```sh
git tag x.x.x
git push origin x.x.x
```
