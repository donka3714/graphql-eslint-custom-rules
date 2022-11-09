"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var eslint_plugin_1 = require("@graphql-eslint/eslint-plugin");
var RULE_ID = 'require-field-issuccessful-in-mutation-result';
var rule = {
    meta: {
        type: 'suggestion',
        docs: {
            category: 'Schema',
            requiresSchema: true,
            examples: [
                {
                    title: 'Incorrect',
                    code: /* GraphQL */ "\n            type User { ... }\n\n            type Mutation {\n              createUser: User!\n            }\n          ",
                },
                {
                    title: 'Correct',
                    code: /* GraphQL */ "\n            type User { ... }\n\n            type Query { ... }\n\n            type CreateUserPayload {\n              user: User!\n              query: Query!\n            }\n\n            type Mutation {\n              createUser: CreateUserPayload!\n            }\n          ",
                },
            ],
        },
        schema: [],
    },
    create: function (context) {
        var _a;
        var schema = (0, eslint_plugin_1.requireGraphQLSchemaFromContext)(RULE_ID, context);
        var mutationType = schema.getMutationType();
        var queryType = schema.getQueryType();
        if (!mutationType || !queryType) {
            return {};
        }
        var selector = ":matches(ObjectTypeDefinition, ObjectTypeExtension)[name.value=".concat(mutationType.name, "] > FieldDefinition > .gqlType Name");
        return _a = {},
            _a[selector] = function (node) {
                var typeName = node.value;
                var graphQLType = schema.getType(typeName);
                console.log("Type------");
                console.log(graphQLType);
                if ((0, graphql_1.isObjectType)(graphQLType)) {
                    //const { fields } = graphQLType.astNode;
                    //console.log(name);          
                    //const fields  = graphQLType.astNode;
                    //console.log(fields);
                    //const nameNode = fields?.name;
                    //console.log(nameNode);
                    //const value = nameNode?.value;
                    //console.log(value);
                    //const hasQueryType = fields.some(field => field.name === 'isSuccessful');
                    console.log("Indicator");
                    //console.log(hasQueryType);
                    //if (!hasQueryType) {
                    if (!false) {
                        context.report({
                            node: node,
                            message: "Mutation result type \"".concat(graphQLType.name, "\" must contain field of type \"isSuccessful\""),
                        });
                    }
                }
            },
            _a;
    },
};
exports.default = rule;
