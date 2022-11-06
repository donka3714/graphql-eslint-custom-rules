import { ESLintUtils } from "@typescript-eslint/utils";
import rule from "../src/rules/no-foo-variables";

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser"
});

ruleTester.run("no-foo-variables", rule, {
  valid: ["bar", "test"],
  invalid: [
    {
      code: "foo",
      errors: [
        {
          messageId: "nofoo"
        }
      ]
    }
  ]
});
