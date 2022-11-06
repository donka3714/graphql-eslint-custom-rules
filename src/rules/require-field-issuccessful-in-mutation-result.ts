
import type { GraphQLESLintRule } from '@graphql-eslint/eslint-plugin/types';
import { requireGraphQLSchemaFromContext } from '@graphql-eslint/eslint-plugin'

const RULE_ID = 'require-field-issuccessful-in-mutation-result';

const rule: GraphQLESLintRule = {
    create(context) {
        console.log("New rule called....");
      return {
        OperationDefinition(node) {
            console.log("Called....");
            console.log(context);
            const schema = requireGraphQLSchemaFromContext(RULE_ID, context)
            console.log(schema);
          if (!node.name || !node.name.value) {
            console.log("If block entered....");
            context.report({
              node,
              message: 'Oops, name is required!'
            })
          }
        }
      }
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
              code: /* GraphQL */ `
                type Mutation {
                  createUser: Boolean
                }
              `,
            },
            {
              title: 'Correct',
              code: /* GraphQL */ `
                type Mutation {
                  createUser: User!
                }
              `,
            },
          ],
        },
        schema: [],
      },
  }  
  
  export default rule;



