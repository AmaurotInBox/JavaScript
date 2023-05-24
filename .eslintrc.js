module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  ecmaFeatures: {
    modules: true,
    spread: true,
    restParams: true,
  },
  rules: {},
};
