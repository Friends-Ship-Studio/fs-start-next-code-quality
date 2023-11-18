## About

This is a starter template for new [Next 14](https://nextjs.org/) projects, with a lightly opinionated setup to support better code quality and maintenance.

It includes basic type safety, linting, and formatting — and suggestions for further additions, below.

## Instructions

This project uses [`pnpm`](https://pnpm.io/) as the package manager. If you do not already have it installed on your system, you can install it globally using `npm`:

```bash
npm install -g pnpm
```

Create a new project using this [GitHub template](https://github.com/Friends-Ship-Studio/fs-start-next-code-quality/generate), or by cloning it locally with a clean git history:

```bash
pnpm dlx degit Friends-Ship-Studio/fs-start-next-code-quality my-new-app
```

Install all dependencies for this project:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) with your browser to open the app.

## Create Next App configuration

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), using Next 14 and the following configuration options:

```
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
```

## Package management: pnpm

[`pnpm`](https://pnpm.io/) is the package manager. Using [`pnpm`](https://pnpm.io/) is very similar to `npm`, but with a different command syntax. Here are some of the most common `npm` commands, and the `pnpm` equivalents:

- `npm install` → `pnpm install`
- `npm i <pkg>` → `pnpm add <pkg>`
- `npx <pkg>` → `pnpm dlx <pkg>` (to dynamically execute a package without installing as a dependency)
- `npm run <cmd>` → `pnpm <cmd>` (to run `package.json` scripts)

## Code quality & maintainability

### Type safety: TypeScript

[TypeScript](https://www.typescriptlang.org/) is set up using the default [Next 14 configuration](https://nextjs.org/docs/app/building-your-application/configuring/typescript) and `strict mode` on.

### Linting: ESLint

[ESLint](https://eslint.org/) is set up for code **linting**, configured with the following:

- [eslint:recommended](https://eslint.org/docs/latest/use/configure/configuration-files#using-eslintrecommended) rule set
- [typescript-eslint](https://typescript-eslint.io/) parser, plugin, and [`recommended-type-checked`](https://typescript-eslint.io/linting/typed-linting) rule set
- [Next's default ESLint setup](https://nextjs.org/docs/app/building-your-application/configuring/eslint) using their [`next/core-web-vitals`](https://nextjs.org/docs/app/building-your-application/configuring/eslint#core-web-vitals) rule set
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) to turn off rules that could conflict with [Prettier](https://prettier.io/)

### Formatting: Prettier

[Prettier](https://prettier.io/) is set up for code **formatting**. It primarily leans on [Prettier defaults](https://prettier.io/docs/en/options.html), with a few overrides / additions:

- No semicolons
- Single quote strings

### Pre-commit hooks: Husky + lint-staged

[Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) are used for a pre-commit hook that checks / enforces the TypeScript, ESLint, and Prettier configurations for any attempted git commits. Commits will fail if there are any TypeScript or ESLint errors that can't be automatically fixed on staged files. Prettier formatting corrections will be applied automatically to supported files as well.

## Suggested additions

The included tools and configurations are meant to provide a solid base level of code quality and maintanence infrastructure that can fit any new Next project. As such, it is only lightly opinionated, and there are further additions that should be considered based on the unique team needs and preferences for individual projects.

Suggestions include:

- [Husky](https://typicode.github.io/husky/#/) and [commitlint](https://commitlint.js.org/#/) for a commit-msg hook that enforces commit messages using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for unit testing.
- [Playwright](https://playwright.dev/) for end-to-end testing.
- [GitHub Actions](https://docs.github.com/en/actions) for CI/CD.
