module.exports = {
  env: {
    "browser": true,
    "es6": true
},
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Use the recommend rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended", // Uses the recommend rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "eslint: recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    plugins: [
      "react",
      "@typescript-eslint"
  ],
  },
};