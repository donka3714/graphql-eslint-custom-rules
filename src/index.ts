import noFooRule from "./rules/no-foo-variables"

module.exports = {
    rules: {
        "no-foo-variables": noFooRule
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
                "@custom-rules/graphql-eslint-custom-rules/no-foo-variables": 1
            }
        }
    }
}