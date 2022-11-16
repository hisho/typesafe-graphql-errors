import type { CodegenConfig } from '@graphql-codegen/cli'

const sharedConfig = {
  immutableTypes: true,
  enumsAsConst: true,
  useTypeImports: true,
  defaultScalarType: 'unknown',
  strictScalars: true,
  scalars: {
    DateTime: 'string',
    createdAt: 'string',
    updatedAt: 'string',
  },
  /**
   * 入力のみavoidOptionalsを無効化する
   * @see https://zenn.dev/izumin/articles/ffc84c1b4310be#avoidoptionals%3A-undefined-%E3%82%92%E5%8E%B3%E5%AF%86%E3%81%AB%E6%89%B1%E3%81%86
   */
  avoidOptionals: {
    field: true,
    inputValue: false,
    object: true,
    defaultValue: false,
  },
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env['NEXT_PUBLIC_GRAPHQL_URL'] ?? '',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/lib/graphql/graphql.ts': {
      plugins: ['typescript'],
      config: sharedConfig,
    },
    'src/': {
      preset: 'near-operation-file',
      config: sharedConfig,
      presetConfig: {
        extension: '.generated.graphql.ts',
        baseTypesPath: '~@src/lib/graphql/graphql',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
      hooks: {
        afterOneFileWrite: ['eslint --fix', 'prettier --write'],
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config
