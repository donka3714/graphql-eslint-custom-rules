import noFooRule from "./rules/require-field-issuccessful-in-mutation-result"

module.exports = {
    rules: {
        "require-field-issuccessful-in-mutation-result": noFooRule
    },
    configs: {
        recommended: {
            plugins: ["@custom-rules/graphql-eslint-custom-rules"],
            parseOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                "@custom-rules/graphql-eslint-custom-rules/require-field-issuccessful-in-mutation-result": 1
            }
        }
    }
}