const path = require(`path`)

module.exports = {
  plugins: [`react`, `react-hooks`, `@next/next`],
  extends: [
    `../.eslintrc.js`,
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:@next/next/core-web-vitals`,
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
  rules: {
    "@next/next/no-img-element": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-curly-brace-presence": 1,
    "react/jsx-no-useless-fragment": [1, {allowExpressions: true}],
    "react/jsx-uses-react": 2,
    "react/no-unused-prop-types": 1,
    "react/prop-types": 0,
    "react/self-closing-comp": 1,
  },
  overrides: [
    {
      files: [`*.ts`, `*.tsx`],
      parserOptions: {
        project: [path.resolve(__dirname, `tsconfig.json`)],
      },
      rules: {
        "@typescript-eslint/no-unnecessary-condition": 1,
      },
    },
  ],
}
