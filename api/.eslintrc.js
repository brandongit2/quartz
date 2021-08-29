module.exports = {
  extends: `../.eslintrc.js`,
  overrides: [
    {
      files: [`**/*.ts`],
      rules: {
        "@typescript-eslint/consistent-type-imports": [1, {prefer: `no-type-imports`}],
      },
    },
  ],
}
