import { test, expect } from '@playwright/test';

test('Should open QAuto', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});