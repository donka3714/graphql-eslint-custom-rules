import { GraphQLRuleTester } from '@graphql-eslint/eslint-plugin'
import rule from '../src/rules/require-field-issuccessful-in-mutation-result';

const ruleTester = new GraphQLRuleTester()

ruleTester.runGraphQLTests('require-field-issuccessful-in-mutation-result', rule, {
  valid: [
    {
      code: 'query something { foo }'
    }
  ],
  invalid: [
    {
      code: 'query invalid { foo }',
      errors: [{ message: 'Your error message.' }]
    }
  ]
})