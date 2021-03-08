# eslint-config-angellist

Sharable ESLint configuration for AngelList.

### Usage

For JS-based projects:

```
cd ../another-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.1' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```

For TS-based projects:

```
cd ../another-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.1' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```

Modify your `.eslintrc.js` config:

```
"extends": ["angellist/js"],
```

Or:


```
"extends": ["angellist/ts"],
```


### Development

Link the package:

```
yarn install
yarn link

cd ../another-project
yarn link "eslint-config-angellist"
```

For JS-based projects:

```
cd ../another-project
yarn add -D \
  'file:../eslint-config-angellist' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```

For TS-based projects:

```
cd ../another-project
yarn add -D \
  'file:../eslint-config-angellist' \
  'eslint-config-airbnb' \
  'eslint-config-prettier' \
  'eslint-plugin-react' \
  'eslint-plugin-react-hooks' \
  'prettier'
```
