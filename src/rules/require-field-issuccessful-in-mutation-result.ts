import { isObjectType, NameNode } from 'graphql';
import { requireGraphQLSchemaFromContext } from '@graphql-eslint/eslint-plugin';
import type { GraphQLESLintRule } from '@graphql-eslint/eslint-plugin/types';
import type { GraphQLESTreeNode } from '@graphql-eslint/eslint-plugin/estree-converter';

const RULE_ID = 'require-field-issuccessful-in-mutation-result';

const rule: GraphQLESLintRule = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Schema',      
      requiresSchema: true,
      examples: [
        {
          title: 'Incorrect',
          code: /* GraphQL */ `
            type User { ... }

            type Mutation {
              createUser: User!
            }
          `,
        },
        {
          title: 'Correct',
          code: /* GraphQL */ `
            type User { ... }

            type Query { ... }

            type CreateUserPayload {
              user: User!
              query: Query!
            }

            type Mutation {
              createUser: CreateUserPayload!
            }
          `,
        },
      ],
    },
    schema: [],
  },
  create(context) {
    const schema = requireGraphQLSchemaFromContext(RULE_ID, context);
    const mutationType = schema.getMutationType();
    
    console.log("******Entered1***********");
    //console.log(mutationType);
    
    
    if (!mutationType) {
      return {};
    }

    console.log("******Entered2***********");

    const selector = `:matches(ObjectTypeDefinition, ObjectTypeExtension)[name.value=${mutationType.name}] > FieldDefinition > .gqlType Name`;

    console.log("******Entered3***********");

    return {
      [selector](node: GraphQLESTreeNode<NameNode>) {

        console.log("******Entered4***********");
        
        const typeName = node.value;
        const graphQLType = schema.getType(typeName);

        //console.log("Type------");        
        //console.log(graphQLType);
        

        if (isObjectType(graphQLType)) {
          const { fields } = graphQLType.astNode;
          //console.log(name);          
          //const fields  = graphQLType.astNode;
          //console.log(fields);
          //const nameNode = fields?.name;
          //console.log(nameNode);
          //const value = nameNode?.value;
          //console.log(fields.name);

          fields.some(field => console.log(field.name)
          );
          
          const hasRequiredField = fields.some(field => field.name.value === 'isSuccessful');
          console.log("Indicator");          
          console.log(hasRequiredField);
          
          if (!hasRequiredField) {
            //if (!false) {
            context.report({
              node,
              message: `Mutation result type "${graphQLType.name}" must contain a field isSuccessful`,
            });
          }
        }
      },
    };
  },
};

module.exports=rule;