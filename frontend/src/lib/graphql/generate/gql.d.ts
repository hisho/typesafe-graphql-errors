/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

declare module '@urql/core' {
  export function gql(
    source: '\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      id\n    }\n  }\n'
  ): typeof import('./graphql').CreateTodoDocument
  export function gql(
    source: '\n  mutation updateTodo($todoId: String!, $input: UpdateTodoInput!) {\n    updateTodo(todoId: $todoId, input: $input) {\n      id\n    }\n  }\n'
  ): typeof import('./graphql').UpdateTodoDocument
  export function gql(
    source: '\n  query updateTodoForm($todoId: String!) {\n    todo(todoId: $todoId) {\n      id\n      title\n      description\n    }\n  }\n'
  ): typeof import('./graphql').UpdateTodoFormDocument
  export function gql(source: string): unknown

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
}
