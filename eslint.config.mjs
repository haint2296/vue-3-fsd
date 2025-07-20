import pluginVue from 'eslint-plugin-vue'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parserTs from '@typescript-eslint/parser'
import parserVue from 'vue-eslint-parser'
import globals from 'globals'

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', 'orval.config.ts'],
    languageOptions: {
      "parser": parserVue,
      parserOptions: {
        "parser": parserTs,
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
