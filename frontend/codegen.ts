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
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    'src/lib/graphql/generate': {
      preset: 'gql-tag-operations-preset',
      config: sharedConfig,
      plugins: [],
      presetConfig: {
        augmentedModuleName: '@urql/core',
        fragmentMasking: true,
      },
      hooks: {
        afterOneFileWrite: ['eslint --fix', 'prettier --write'],
      },
    },
  },
}

export default config
