# Template Gatsby

![license](https://img.shields.io/github/license/kporten/template-gatsby)
![tag](https://img.shields.io/github/v/tag/kporten/template-gatsby)
![last-commit](https://img.shields.io/github/last-commit/kporten/template-gatsby)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/template-gatsby/workflows/CI/badge.svg?branch=master&event=push)

Template for a website with Gatsby and TypeScript.

## Requirements

[Yarn 1 (Classic)](https://classic.yarnpkg.com/lang/en/)

## Getting Started

```bash
yarn install
yarn start
```

## Development Scripts

```bash
yarn start # start gatsby development server
yarn build # build production-ready gatsby site
yarn serve # serve production-ready gatsby site
yarn clean # clean gatsby development resources
yarn lint # lint code with eslint
yarn hint # hints for code with webhint
yarn type-check # run type check for files
yarn changelog # create/update the changelog
yarn test # run jest tests
yarn e2e # open cypress to start e2e tests manually
yarn e2e:run # run cypress e2e tests
yarn commit # commitizen friendly commit helper
```

## CI Scripts

```bash
yarn test:ci # run jest tests in ci mode
yarn e2e:ci # run cypress e2e tests in ci mode
```

> This project contains a GitHub CI workflow that runs on push (except for tags) and pull request events.

## Secrets

You will need to define the following secrets to use this project with the initial CI workflow configuration.

```ini
# GitHub > Repository > Settings > Secrets
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

## Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)

### Quality

- [ESLint](https://eslint.org/)
- [WebHint](https://webhint.io/)
- [Prettier](https://prettier.io/)
- [Snyk](https://snyk.io/)

### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

### Other

- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)
