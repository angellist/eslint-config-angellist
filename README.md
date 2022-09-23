# eslint-config-angellist

Sharable ESLint, Prettier and Rubocop configuration for AngelList.

### Usage

#### For React and TypeScript projects:

```sh
cd ../frontend-project
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.8' \
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
yarn add -D \
  'git+https://github.com/angellist/eslint-config-angellist#0.0.8' \
  'prettier'

ln -s ./node_modules/eslint-config-angellist/.prettierrc.js .prettierrc.js
```

Add the following gems to `Gemfile` and then install them with `bundle install`

```rb
group :development do
  gem 'prettier', require: false
  gem 'rubocop', '~> 1.36', require: false
  gem 'rubocop-graphql', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rake', require: false
  gem 'rubocop-rspec', require: false
  gem 'rubocop-thread_safety', require: false
end
```

Create `.rubocop.yml`:

```yml
inherit_gem:
  prettier: rubocop.yml

require:
  - rubocop-graphql
  - rubocop-performance
  - rubocop-rails
  - rubocop-rake
  - rubocop-rspec
  - rubocop-thread_safety
  - ./node_modules/eslint-config-angellist/rubocop-cops/sidekiq_dont_use_keyword_arguments.rb

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
