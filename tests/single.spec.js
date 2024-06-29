import { existsSync } from 'node:fs'
import { test, expect } from '@playwright/test'
import sdk from '@evinced/js-playwright-sdk'

test.describe('Evinced Demo Page', () => {
  test('Single Run Test', async ({ page }) => {
    const evReport = './test-results/single.html'
    const evincedService = new sdk.EvincedSDK(page)
    await page.goto('https://demo.evinced.com/')
    const issues = await evincedService.evAnalyze()
    await evincedService.evSaveFile(issues, 'html', evReport)
    expect(existsSync(evReport)).toBeTruthy()
  })
})
