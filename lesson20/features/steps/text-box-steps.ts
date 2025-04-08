import { Given, When, Then } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../../src/support/robot-dreams.world';
import { DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open the text box page', async function (this: RobotDreamsWorld) {
    await this.textBoxPage.goto();
});

When('I fill the form with:', async function (this: RobotDreamsWorld, table: DataTable) {
    const data = table.rowsHash();
    await this.textBoxPage.fillForm(
        data.name,
        data.email,
        data.currentAddress,
        data.permanentAddress
    );
});

When('I submit the form', async function (this: RobotDreamsWorld) {
    await this.textBoxPage.submitForm();
});

Then('I should see the name {string}', async function (this: RobotDreamsWorld, name: string) {
    await expect(this.textBoxPage.outputName).toContainText(name);
});

Then('I should see the email {string}', async function (this: RobotDreamsWorld, email: string) {
    await expect(this.textBoxPage.outputEmail).toContainText(email);
});
