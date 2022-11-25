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
    source: '\n  query updateTodoForm {\n    todo(todoId: "99d884e5-f582-479a-8748-0ded8f7f9528") {\n      id\n      title\n      description\n    }\n  }\n'
  ): typeof import('./graphql').UpdateTodoFormDocument
  export function gql(source: string): unknown

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
}
