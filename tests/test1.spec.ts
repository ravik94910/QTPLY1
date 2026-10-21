import { test, expect } from "@playwright/test";

test
('MyFirstPlaywrightprg', async ({page}) =>
	{
		await page.goto('https://google.com');
		await expect(page).toHaveTitle(/Google/);
        await page.waitForTimeout(6000);
    }
);


// test ("MyFirstPlayScript", async ({page}) =>
// {
//     await page.goto('https://google.com/');
//     await expect(page).toHaveTitle(/Google/);
//     await page.getByRole('link',{name: 'Gmail'}).click();
//     await page.waitForTimeout(6000);
//     await expect(page.getByRole('link',{name: 'installation'})).toBeVisible();
//     await page.waitForTimeout(5000);
//     await expect(page.getByRole('heading',{name: 'installation'})).toBeVisible();
//     await page.waitForTimeout(5000); // wait 1 second
//     await page.getByRole('link',{name: 'How to install Playwright'}).click();
//     await expect(page.getByRole('heading',{name: 'Direct link to Installing Playwright'})).toBeVisible();
//     await page.waitForTimeout(5000); // wait 1 second
    
// }
// );