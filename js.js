module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: "babel-eslint",
  rules: {
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-fragments": ["error", "syntax"],
  },
};
