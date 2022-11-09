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
      type CreateUserPayload {             
        isSuccessful: String
      }
      type Mutation {
        createUser: CreateUserPayload!
      }
    `),    
  ],
  invalid: [
    {
      name: 'should ignore arguments',
      ...useSchema(/* GraphQL */ `
      type CreateUserPayload {
        user: String!             
      }        
      type Mutation {
          createUser: CreateUserPayload!
        }        
      `),
      errors: [{ message: 'Mutation result type "CreateUserPayload" must contain a field isSuccessful' }],
    },    
  ],
});