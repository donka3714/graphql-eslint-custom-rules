"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var no_foo_variables_1 = __importDefault(require("./rules/no-foo-variables"));
module.exports = {
    rules: {
        "no-foo-variables": no_foo_variables_1.default
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
};
