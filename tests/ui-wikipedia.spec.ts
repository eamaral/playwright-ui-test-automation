import { test, expect } from '@playwright/test';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test.describe('Teste de Frontend - Wikipedia', () => {
  
  test('Verifica o título da página inicial', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    const title = await page.title();
    expect(title).toBe('Wikipedia');
    await sleep(2000);
  });


  test('Busca por Playwright no Wikipedia', async ({ page }) => {

    await page.goto('https://www.wikipedia.org/');

    await page.fill('input[name=search]', 'Playwright');

    await page.click('button[type=submit]');
    
    await page.waitForSelector('h1');
    
    const heading = await page.textContent('h1');
    expect(heading).toContain('Playwright');
    await sleep(2000);
  });
});
