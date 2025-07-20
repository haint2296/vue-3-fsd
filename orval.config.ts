import { defineConfig } from 'orval'

export default defineConfig({
  simpleApi: {
    input: './openapi.yaml',
    output: {
      mode: 'tags-split',
      target: './src/shared/services/api/hooks',
      schemas: './src/shared/services/api/models',
      client: 'vue-query',
      clean: true,
      headers: true,
      allParamsOptional: true,
      override: {
        mutator: {
          path: './src/shared/lib/axios/axios.lib.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          signal: true,
        },
      },
      mock: {
        type: 'msw',
        delay: 1000,
        generateEachHttpStatus: true,
      },
      prettier: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
  simpleApiZod: {
    input: {
      target: './openapi.yaml',
    },
    output: {
      mode: 'tags-split',
      client: 'zod',
      target: './src/shared/services/api/types',
      fileExtension: '.zod.ts',
    },
  },
})
