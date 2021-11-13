const path = require(`path`)

module.exports = {
  extends: `../.eslintrc.js`,
  overrides: [
    {
      files: [`**/*.ts`],
      parserOptions: {
        project: [path.resolve(__dirname, `tsconfig.json`)],
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": [1, {prefer: `no-type-imports`}],
        "@typescript-eslint/explicit-module-boundary-types": 1,
        "@typescript-eslint/no-unnecessary-condition": 1,
      },
    },
  ],
}
