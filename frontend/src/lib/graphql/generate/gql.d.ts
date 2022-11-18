/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

declare module '@urql/core' {
  export function gql(
    source: '\n  mutation createTodo($input: CreateTodoInput!) {\n    createTodo(input: $input) {\n      uuid\n    }\n  }\n'
  ): typeof import('./graphql').CreateTodoDocument
  export function gql(source: string): unknown

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
}
