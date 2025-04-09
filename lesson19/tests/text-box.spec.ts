import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box-page';

test.describe('Text Box form on demoqa.com', () => {
    let textBoxPage: TextBoxPage;

    test.beforeEach(async ({ page }) => {
        textBoxPage = new TextBoxPage(page);
        await textBoxPage.goto();
    });

    test('should fill the form and display correct output', async () => {
        const data =  { 
            name: 'Lena QA',
            email: 'lena@example.com',
            currentAddress: 'Nice, France',
            permanentAddress: 'Remote Planet Earth'
        };        
        await textBoxPage.fillForm(data);
        await textBoxPage.submitForm();
        await expect(textBoxPage.outputBox).toBeVisible();
        await expect(textBoxPage.outputName).toContainText(data.name);
        await expect(textBoxPage.outputEmail).toContainText(data.email);
    });
});
