"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
var utils_1 = require("@typescript-eslint/utils");
var createRule = utils_1.ESLintUtils.RuleCreator(function (name) { return name; });
exports.rule = createRule({
    create: function (context) {
        return {
            Identifier: function (node) {
                if (node.name === "foo") {
                    context.report({
                        node: node,
                        messageId: "nofoo"
                    });
                }
            }
        };
    },
    name: "no-foo-variables",
    meta: {
        docs: {
            description: "No Foo Variables allowed.",
            recommended: "warn"
        },
        type: "problem",
        messages: {
            nofoo: "Do not pity the foo"
        },
        schema: []
    },
    defaultOptions: []
});
exports.default = exports.rule;
