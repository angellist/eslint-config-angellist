# eslint-config-angellist

Sharable ESLint configuration for AngelList.

### Usage

```sh
cd ../another-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.5' \
  '@typescript-eslint/eslint-plugin' \
  '@typescript-eslint/parser' \
  'eslint-config-airbnb-typescript' \
  'eslint-config-prettier' \
  'eslint-plugin-import' \
  'eslint-plugin-jsx-a11y' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```

Modify your `.eslintrc` config:

```js
"extends": ["angellist"],
"parserOptions": {
  "project": ["./tsconfig.json"]
},
```


### Development

To test the package locally:

```sh
yarn install
yarn link

cd ../another-project
yarn link eslint-config-angellist
```

For TS-based projects:

```sh
cd ../another-project
yarn add -D \
  'file:../eslint-config-angellist' \
  '@typescript-eslint/eslint-plugin' \
  '@typescript-eslint/parser' \
  'eslint-config-airbnb-typescript' \
  'eslint-config-prettier' \
  'eslint-plugin-import' \
  'eslint-plugin-jsx-a11y' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```
