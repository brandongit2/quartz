module.exports = {
  root: true,
  plugins: [`import`],
  extends: [`eslint:recommended`, `plugin:import/recommended`],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "import/no-duplicates": 2,
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        groups: [
          [`builtin`, `external`],
          [`object`, `unknown`, `type`],
          [`internal`, `parent`, `sibling`, `index`],
        ],
        pathGroups: [
          {
            pattern: `{src/**,#*/**}`,
            group: `internal`,
          },
        ],
        pathGroupsExcludedImportTypes: [`builtin`],
        "newlines-between": `always`,
        alphabetize: {order: `asc`, caseInsensitive: true},
        warnOnUnassignedImports: true,
      },
    ],
    "prefer-const": 0,
    "no-console": [1, {allow: [`warn`, `error`]}],
    "no-constant-condition": [2, {checkLoops: false}],
    "no-control-regex": 0,
    "no-empty": [1, {allowEmptyCatch: true}],
    "no-fallthrough": 0,
    "no-unused-vars": [1, {ignoreRestSiblings: true}],
    quotes: [1, `backtick`],
  },
  overrides: [
    {
      files: [`**/*.ts`, `**/*.tsx`],
      parser: `@typescript-eslint/parser`,
      plugins: [`@typescript-eslint`],
      extends: `plugin:@typescript-eslint/recommended`,
      rules: {
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/consistent-type-imports": 1,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-extra-semi": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-unused-vars": [1, {ignoreRestSiblings: true}],
        "@typescript-eslint/quotes": [1, `backtick`],
        "prefer-const": 0,
        quotes: 0,
      },
    },
  ],
}
