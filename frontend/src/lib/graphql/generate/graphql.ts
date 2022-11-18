/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string
}

export type CreateTodoInput = {
  /** 説明 */
  readonly description: InputMaybe<Scalars['String']>
  /** タイトル */
  readonly title: Scalars['String']
}

export type Mutation = {
  readonly __typename?: 'Mutation'
  /** todo作成 */
  readonly createTodo: Todo
  /** todo削除 */
  readonly deleteTodo: Todo
  /** todo更新 */
  readonly updateTodo: Todo
}

export type MutationCreateTodoArgs = {
  input: CreateTodoInput
}

export type MutationDeleteTodoArgs = {
  uuid: Scalars['String']
}

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput
  uuid: Scalars['String']
}

export type Query = {
  readonly __typename?: 'Query'
  /** todo取得 */
  readonly todo: Todo
  /** todo一覧取得 */
  readonly todos: ReadonlyArray<Todo>
}

export type QueryTodoArgs = {
  uuid: Scalars['String']
}

export type Todo = {
  readonly __typename?: 'Todo'
  /** 作成日 */
  readonly createdAt: Scalars['DateTime']
  /** 説明文 */
  readonly description: Maybe<Scalars['String']>
  /** ID */
  readonly id: Scalars['ID']
  /** タイトル */
  readonly title: Scalars['String']
  /** 更新日 */
  readonly updatedAt: Scalars['DateTime']
  /** UID */
  readonly uuid: Scalars['String']
}

export type UpdateTodoInput = {
  /** 説明 */
  readonly description: InputMaybe<Scalars['String']>
  /** タイトル */
  readonly title: Scalars['String']
}

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput
}>

export type CreateTodoMutation = {
  readonly __typename?: 'Mutation'
  readonly createTodo: { readonly __typename?: 'Todo'; readonly uuid: string }
}

export type UpdateTodoMutationVariables = Exact<{
  uuid: Scalars['String']
  input: UpdateTodoInput
}>

export type UpdateTodoMutation = {
  readonly __typename?: 'Mutation'
  readonly updateTodo: { readonly __typename?: 'Todo'; readonly uuid: string }
}

export type UpdateTodoFormQueryVariables = Exact<{ [key: string]: never }>

export type UpdateTodoFormQuery = {
  readonly __typename?: 'Query'
  readonly todo: {
    readonly __typename?: 'Todo'
    readonly uuid: string
    readonly title: string
    readonly description: string | null
  }
}

export const CreateTodoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTodo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateTodoInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>
export const UpdateTodoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateTodo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uuid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateTodoInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uuid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uuid' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTodoMutation, UpdateTodoMutationVariables>
export const UpdateTodoFormDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'updateTodoForm' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'todo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uuid' },
                value: {
                  kind: 'StringValue',
                  value: '99d884e5-f582-479a-8748-0ded8f7f9528',
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uuid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateTodoFormQuery, UpdateTodoFormQueryVariables>
