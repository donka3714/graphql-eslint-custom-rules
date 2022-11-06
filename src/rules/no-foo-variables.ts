import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => name);

export const rule = createRule({
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "foo") {
          context.report({
            node,
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

export default rule;
