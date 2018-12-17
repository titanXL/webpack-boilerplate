# webpack-boilerplate

## This boilerplate uses webpack for development and production ready JavaScript bundles! Setup as a boilerplate for React projects.

As almost all modern development processes, the project utilizes babel to compile next generation JS, down to JS supported by older browsers. It includes plugins specifically for React projects and Jest as a test framework.

# Usage:

- For development: run `npm run dev` - Starts a webpack dev server without hot module replacement
- For development with HRM: run `npm run dev:hot`, both dev scripts run with a sourcemap for eassier debugging
- For production: run `npm run build` - Creates a prodcuction ready bundle including: minification, tree shaking, bundle analyzer and externalizes react and reactdom, to be loaded via CDN.
- For testing: run `npm run test` - Uses [Jest](https://jestjs.io/) as a test runner

### Precommit hooks
- Uses husky and a precommit hook to run formating, linting and testing scripts, so that every commit is of most high standarts and tested.


Setup as a boilerplate for React projects, it includes libraries such as react-a11y for accessebility checks, react-axe for accessebility issues not captured by react-a11y

## Linters and formaters
The project uses eslint for linting javascript errors and prettier for formatting standarts. Configurations can be found in .eslintrc.json and for the later .prettierrc