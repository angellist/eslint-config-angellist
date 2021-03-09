module.exports = {
  extends: [
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-fragments": ["error", "syntax"],
  },
  plugins: [
    "@typescript-eslint",
  ],
};
