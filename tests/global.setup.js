// require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { setCredentials, getAuthData } = require('@evinced/js-playwright-sdk')

test('Authorize Evinced SDK', async () => {
  await setCredentials({
    serviceId: process.env.EVINCED_SERVICE_ID,
    secret: process.env.EVINCED_API_KEY,
  }).catch(() => {
    throw new Error('Evinced SDK authorization failure.')
  })
  expect(getAuthData().token).toBeTruthy()
})
