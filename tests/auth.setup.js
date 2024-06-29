import { test, expect } from '@playwright/test'
import sdk from '@evinced/js-playwright-sdk'

test('Authorize Evinced SDK', async () => {
  await sdk
    .setCredentials({
      serviceId: process.env.EVINCED_SERVICE_ID,
      secret: process.env.EVINCED_API_KEY,
    })
    .then(() => {
      console.log('Evinced SDK authorized.')
      console.log('')
    })
    .catch(() => {
      throw new Error('Evinced SDK authorization failure.')
    })
  expect(sdk.getAuthData()).toBeTruthy()
})
