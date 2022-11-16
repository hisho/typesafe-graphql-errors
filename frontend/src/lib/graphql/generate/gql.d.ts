/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

declare module '@urql/core' {
  export function gql(
    source: '\n  query Todos {\n    todos {\n      createdAt\n      description\n      id\n      title\n      updatedAt\n      uuid\n    }\n  }\n'
  ): typeof import('./graphql').TodosDocument
  export function gql(source: string): unknown

  export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
    TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
}
