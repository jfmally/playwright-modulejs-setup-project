# Evinced Playwright JS SDK Example — ESM with auth in test project

This example illustrates Evinced Playwright JS SDK usage in a ECMAScript
(JavaScript) module context with authorization in a setup test project.

## Using ECMAScript modules with Playwright JS

Playwright JS loads files as ECMAScript modules if the file extension is `.mjs`
or if package.json has `"type": "module"` set, otherwise `.js` files are loaded
as CommonJS modules. (Files with extension `.cjs` are always loaded as CommonJS
modules.) In this example, package.json sets `"type": "module"`.

> **Note:** A common source of confusion is the following statement:
>
> ```
> import { aName } from 'some-module';
> ```
>
> In CommonJS context, `{ aName }` is interpreted as object destructuing, but it
> is not in ECMAScript context — `aName` must be an explicitly named export in
> `some-module`. For reliable loading of ECMAScript modules, use the `.mjs`
> extension or set `"type": "module"` in package.json. This example does the
> latter.

## Authorization

Evinced SDK requires a Service ID and an API Key when used with Playwright JS.
Licensed users can obtain those from
[Evinced Product Hub - Web SDK](https://hub.evinced.com/web-sdk) and should set
them in their enviornment or in a `.env` file in the project directory before
running tests.

```shell
EVINCED_SERVICE_ID
EVINCED_API_KEY
```

## Installation

A local copy of Evinced SDK must be available as a gzipped tar file. Run NPM or
the package manager of your choice (yarn, pnpm) to install it along with the
other dependencies.

```shell
# Using npm package manager
npm install -D (path to js-playwright-sdk-$version.tgz)
```

## Running the Tests

The example performs two tests across three browsers each. Each test scans
http://demo.evinced.com for accessibility issue using the Evinced engine. (It
should find some.)

- A single-run test using `evAnalyze()`
- A continuous-run test using `evStart()` and `evStop()`

Use either the package manager or `npx` directly to run the tests.

```shell
# Using NPM
npm start

# Using npx
npx playwright test
```

Successful execution should echo the following:

```shell
> playwright test

Running 7 tests using 5 workers
[auth] › auth.setup.mjs:4:1 › Authorize Evinced SDK
Evinced SDK is authorized.

Running 7 tests using 5 workers
  7 passed (7.0s)

To open last HTML report run:

  npx playwright show-report
```

Evinced accessibility reports in HTML format should be generated for each test:

- `./test-results/single.html`
- `./test-results/continuous.html`
