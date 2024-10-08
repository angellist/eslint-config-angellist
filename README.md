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

```sh
cd ../backend-project
yarn add -D 'git+https://github.com/angellist/eslint-config-angellist#0.1.6'
```

Add the following gems to `Gemfile` and then install them with `bundle install`

```rb
group :development do
  gem 'rubocop', '~> 1.36', require: false
  gem 'rubocop-graphql', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rake', require: false
  gem 'rubocop-rspec', require: false
  gem 'rubocop-shopify', '~> 2.10', require: false
  gem 'rubocop-thread_safety', require: false
end
```

Create `.rubocop.yml`:

```yml
inherit_from: ./node_modules/eslint-config-angellist/.rubocop.yml

# Modify the content below depending on your needs
AllCops:
  TargetRailsVersion: 6.0
  TargetRubyVersion: 2.7
  DisabledByDefault: true
  Exclude:
    - bin/*
    - db/**/*
    - node_modules/**/*
    - public/**/*
    - script/**/*
    - tmp/**/*
    - vendor/**/*

# List of all available cops: https://docs.rubocop.org/rubocop/1.36/cops.html
# List of all enabled cops: bundle exec rubocop rubocop --show-cops
```

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
