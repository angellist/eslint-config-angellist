# eslint-config-angellist

Sharable ESLint configuration for AngelList.

### Usage

For JS-based projects:

```sh
cd ../another-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.1' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier' \
  'babel-eslint'
```

For TS-based projects:

```sh
cd ../another-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.1' \
  'eslint-config-airbnb-typescript' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```

Modify your `.eslintrc` config:

```js
"extends": ["angellist/js"],
```

For TS-based projects:


```js
"extends": ["angellist"],
```


### Development

To test the package locally:

```sh
yarn install
yarn link

cd ../another-project
yarn link eslint-config-angellist
```

For JS-based projects:

```sh
cd ../another-project
yarn add -D \
  'file:../eslint-config-angellist' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier' \
  'babel-eslint'
```

For TS-based projects:

```sh
cd ../another-project
yarn add -D \
  'file:../eslint-config-angellist' \
  'eslint-config-airbnb-typescript' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```
