import { GraphQLRuleTester, ParserOptions } from '@graphql-eslint/eslint-plugin';
import rule from '../src/rules/require-field-issuccessful-in-mutation-result';

const useSchema = (code: string): { code: string; parserOptions: ParserOptions } => ({
  code,
  parserOptions: {
    schema: /* GraphQL */ `
      type CreateUserPayload {
        isSuccessful: String
      }

      ${code}
    `,
    filePath: "",
  },
});

const ruleTester = new GraphQLRuleTester();

ruleTester.runGraphQLTests('require-field-of-type-query-in-mutation-result', rule, {
  valid: [     
    useSchema(/* GraphQL */ `
        # type Query is not defined and no error is reported
      type Mutation {
        createUser: CreateUserPayload!
      }
`   ),  
  ],
  invalid: [
    {
      name: 'Test for failure',
      ...useSchema(/* GraphQL */ `             
      type DeleteUserPayload {             
        failed: String
      }
      type Mutation {
        deleteUser: DeleteUserPayload!
      }       
      `),
      errors: [{ message: 'Mutation result type "DeleteUserPayload" must contain a field isSuccessful' }],
    },    
  ],
});