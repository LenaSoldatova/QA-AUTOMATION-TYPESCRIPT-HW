import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/buttons-page';

test.describe('Buttons interactions on demoqa.com', () => {
    let buttonsPage: ButtonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.goto();
    });

    test('should show message after double click', async () => {
        await buttonsPage.doubleClick();
        await expect(buttonsPage.doubleClickMessage).toBeVisible();
        await expect(buttonsPage.doubleClickMessage).toHaveText('You have done a double click');
    });

    test('should show message after right click', async () => {
        await buttonsPage.rightClick();
        await expect(buttonsPage.rightClickMessage).toBeVisible();
        await expect(buttonsPage.rightClickMessage).toHaveText('You have done a right click');
    });

    test('should show message after dynamic click', async () => {
        await buttonsPage.dynamicClick();
        await expect(buttonsPage.dynamicClickMessage).toBeVisible();
        await expect(buttonsPage.dynamicClickMessage).toHaveText('You have done a dynamic click');
    });
});
