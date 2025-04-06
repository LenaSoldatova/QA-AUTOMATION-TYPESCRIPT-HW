import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box-page';

test.describe('Text Box form on demoqa.com', () => {
    let textBoxPage: TextBoxPage;

    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.goto();
    });

    test('should fill the form and display correct output', async () => {
        await textBoxPage.fillForm(
            'Lena QA',
            'lena@example.com',
            'Nice, France',
            'Remote Planet Earth'
        );

        await textBoxPage.submitForm();

        await expect(textBoxPage.outputBox).toBeVisible();
        await expect(textBoxPage.outputName).toContainText('Lena QA');
        await expect(textBoxPage.outputEmail).toContainText('lena@example.com');
    });
});
