module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  settings: {
    react: {
      version: "999.999.999",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@babel", "react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/no-find-dom-node": "off",
  },
}
