/**
 * @fileoverview ESLint recommended configuration for React
 * @author Ashkan Pourghasem
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// define configurations
module.exports.configs = {
  recommended: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        }
      }
    },
    plugins: ['testing-library'],
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended'
    ],
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'type',
            'external',
            'internal',
            'sibling',
            'parent',
            'index',
            'object'
          ]
        }
      ]
    },
    overrides: [
      {
        files: ['**/*.ts?(x)'],
        extends: ['plugin:@typescript-eslint/recommended']
      },
      {
        files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[jt]s?(x)'],
        extends: ['plugin:testing-library/react', 'plugin:jest/recommended']
      },
      {
        files: ['cypress/**/?(*.)+(spec).[jt]s'],
        extends: ['plugin:cypress/recommended']
      }
    ],
    ignorePatterns: ['coverage/**/*']
  }
};
