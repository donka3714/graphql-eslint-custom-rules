module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "plugin:sonarjs/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["sonarjs", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"    
  },
  rules: {
    "prettier/prettier": ["off", { trailingComma: "none" }],
    curly: 2
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  overrides: [
    {
      files: ["**/*.test.*", "**/*.stories.*"],
      rules: {
        "sonarjs/no-duplicate-string": 0
      }
    },
    {
      files: ["*.ts"],
      extends: [
        "plugin:sonarjs/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",        
      ],
      plugins: ["sonarjs", "@typescript-eslint", "prettier"],
      parser: ["@typescript-eslint/parser"],         
      rules: {
        curly: [2, "all"]
      }
    },
    {
      files: ["*.graphql"],
      parser: ["@graphql-eslint/eslint-plugin"],
      plugins: ["@graphql-eslint", "eslint-plugin-eslint-comments"],
      rules: {
        "prettier/prettier": [
          "error"
        ],
        "require-field-issuccessful-in-mutation-result": "error"
      },
      parserOptions: {
        schema: "./src/graphql/schema/*.graphql" 
      },
      extends: "plugin:@graphql-eslint/schema-recommended",      
    }
  ]
};
