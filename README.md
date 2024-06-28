# Using Evinced SDK with Playwright JS — globalSetup SDK authorization

Demonstrates a Playwright JS example for testing with Evinced SDK using
Playwright globalSetup configuration for SDK authorization.

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

The example uses the ECMAScript module format, which is supported and stable in
Node.js versions 14 and later.

This example requires access and authorization for Evinced Playwright JS SDK. If
not already available, visit [ to get started. Ensure that you have:

- A path to a local installation of the Evinced Playwright JS SDK,
  `js-playwright-sdk-{version}.tgz`.
- The Evinced SDK authorization keys available in
  [Evinced Product Hub - Web SDK](https://hub.evinced.com/web-sdk) should be set
  in your enviornment or in a .env file in the project directory.
  - `EVINCED_SERVICE_ID`
  - `EVINCED_API_KEY`

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
  7 passed (7.0s)

To open last HTML report run:

  npx playwright show-report
```

The tests will generate Evinced accessibility reports in HTML format for each
test:

- `./test-results/single.html`
- `./test-results/continuous.html`
