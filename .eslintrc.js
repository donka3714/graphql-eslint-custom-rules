module.exports = {  
  overrides: [    
    {
      files: ["*.ts"],
      parser: ["@typescript-eslint/parser"],
      processor: "@graphql-eslint/graphql",
      extends: [
        "plugin:sonarjs/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",        
      ],
      plugins: ["sonarjs", "@typescript-eslint", "prettier"]      
    },
    {
      files: ["*.graphql"],
      processor: "@graphql-eslint/graphql",
      parser: ["@graphql-eslint/eslint-plugin"],
      plugins: ["@graphql-eslint", "eslint-plugin-eslint-comments"],
      rules: {
        "prettier/prettier": [
          "error"
        ],
        "require-field-issuccessful-in-mutation-result":"off"
      },
      parserOptions: {
        schema: "./src/graphql/schema/*.graphql" 
      },
      extends: "plugin:@graphql-eslint/schema-recommended",      
    }
  ]
};
