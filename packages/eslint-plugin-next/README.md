# @ashkan-pm/eslint-plugin-next

ESLint recommended configuration for Next.js

## Installation

You'll first need to install [ESLint](https://eslint.org/) and [@ashkan-pm/eslint-plugin-react](https://www.npmjs.com/package/@ashkan-pm/eslint-plugin-react/):

```sh
yarn add -D eslint @ashkan-pm/eslint-plugin-react
```

Next, install `@ashkan-pm/eslint-plugin-next`:

```sh
yarn add -D @ashkan-pm/eslint-plugin-next
```

## Usage

Add the `@ashkan-pm/next` recommended configuration to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "extends": ["plugin:@ashkan-pm/next/recommended"]
}
```
