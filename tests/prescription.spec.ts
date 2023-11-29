import { test, expect } from '@playwright/test';
import { username, password, url } from '../env.ts'

test('test', async ({ page }) => {
  await page.goto(url);
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill(username);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill(password);
  await page.getByRole('button', { name: 'Log On' }).click();
  await page.getByRole('button', { name: 'On to Step 2 (Alt N)' }).click();
  await page.getByRole('button', { name: 'On to Step 3 (Alt N)' }).first().click();
  await page.getByLabel('Send me a confirmation email:').check();
  // await page.getByRole('button', { name: 'Send Request' }).click();
});