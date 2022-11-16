/* eslint-disable */
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
  readonly description?: InputMaybe<Scalars['String']>
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
  readonly description?: InputMaybe<Scalars['String']>
  /** タイトル */
  readonly title?: InputMaybe<Scalars['String']>
}
