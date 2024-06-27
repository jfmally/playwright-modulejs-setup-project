const { existsSync } = require('node:fs')
const { test, expect } = require('@playwright/test')
const { EvincedSDK } = require('@evinced/js-playwright-sdk')

test.describe('Evinced Demo Page', () => {
  test('Single Run Test', async ({ page }) => {
    const evReport = './test-results/single.html'
    const evincedService = new EvincedSDK(page)
    await page.goto('https://demo.evinced.com/')
    const issues = await evincedService.evAnalyze()
    await evincedService.evSaveFile(issues, 'html', evReport)
    expect(existsSync(evReport)).toBeTruthy()
  })
})
