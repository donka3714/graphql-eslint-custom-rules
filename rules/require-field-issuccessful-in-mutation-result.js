"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eslint_plugin_1 = require("@graphql-eslint/eslint-plugin");
var RULE_ID = 'require-field-issuccessful-in-mutation-result';
var rule = {
    create: function (context) {
        console.log("New rule called....");
        return {
            OperationDefinition: function (node) {
                console.log("Called....");
                console.log(context);
                var schema = (0, eslint_plugin_1.requireGraphQLSchemaFromContext)(RULE_ID, context);
                console.log(schema);
                if (!node.name || !node.name.value) {
                    console.log("If block entered....");
                    context.report({
                        node: node,
                        message: 'Oops, name is required!'
                    });
                }
            }
        };
    },
    meta: {
        type: 'suggestion',
        hasSuggestions: true,
        docs: {
            category: 'Schema',
            requiresSchema: true,
            examples: [
                {
                    title: 'Incorrect',
                    code: /* GraphQL */ "\n                type Mutation {\n                  createUser: Boolean\n                }\n              ",
                },
                {
                    title: 'Correct',
                    code: /* GraphQL */ "\n                type Mutation {\n                  createUser: User!\n                }\n              ",
                },
            ],
        },
        schema: [],
    },
};
exports.default = rule;
