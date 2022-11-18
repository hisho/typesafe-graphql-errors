/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

declare module '@urql/core' {
  export function gql(
    source: '\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      uuid\n    }\n  }\n'
  ): typeof import('./graphql').CreateTodoDocument
  export function gql(
    source: '\n  mutation updateTodo($uuid: String!, $input: UpdateTodoInput!) {\n    updateTodo(uuid: $uuid, input: $input) {\n      uuid\n    }\n  }\n'
  ): typeof import('./graphql').UpdateTodoDocument
  export function gql(
    source: '\n  query updateTodoForm {\n    todo(uuid: "99d884e5-f582-479a-8748-0ded8f7f9528") {\n      uuid\n      title\n      description\n    }\n  }\n'
  ): typeof import('./graphql').UpdateTodoFormDocument
  export function gql(source: string): unknown

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
}
