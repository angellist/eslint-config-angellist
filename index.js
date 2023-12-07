module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-use-before-define": "off",
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": "off",
    "import/no-cycle": "warn",
    "import/order": [
      "error",
      {
        "groups": ["external", "internal", "object"],
        "pathGroups": [{ "pattern": "~/**", "group": "internal" }],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true },
      },
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-quotes": ["error", "prefer-single"],
    "no-alert": "off",
    "no-console": ["error"],
    "no-restricted-globals": "off",
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/prefer-stateless-function": "warn",
    "react/require-default-props": [2, { ignoreFunctionalComponents: true }],
    "react/static-property-placement": "off",
  },
  overrides: [
    {
      files: ["**.ts?(x)"],
      rules: {
        // TS supports this rule as a compiler setting
        // See: https://www.typescriptlang.org/tsconfig#noUnusedLocals
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ],
  plugins: [
    "@typescript-eslint",
  ],
};
