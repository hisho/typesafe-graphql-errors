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
  avoidOptionals: true,
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env['NEXT_PUBLIC_GRAPHQL_URL'] ?? '',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
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
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config
