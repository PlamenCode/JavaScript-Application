const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let page, browser;

describe('N2N Tests for 01.Messenger', function (){
    this.timeout(12000);

    before(async () =>{ browser = await chromium.launch({headless: false, slowMo: 500})});
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { await page.close() });
    after(async () => {await browser.close() });

    it('Testing: load messages', async () => {
        await page.goto('http://127.0.0.1:5500/Data%20and%20Authentication%20-%20Exercise/01.Messenger/index.html');

        await page.click('#refresh');

        const content = await page.textContent('#messages');
        expect(content).to.contains('Spami: Hello, are you there?');
        expect(content).to.contains('Spami: Hello, George nice to see you! :)))');
    });

    it('tests the send functionality', async () =>{
        await page.goto('http://127.0.0.1:5500/Data%20and%20Authentication%20-%20Exercise/01.Messenger/index.html');

        const input = 
        await page.locator('input[name="author"]').fill('plamen');
        await page.locator('input[name="content"]').fill('Hello From Plamen');

        await page.click('#submit');
        await page.click('#refresh');

        const content = await page.textContent('#messages');
        expect(content).to.contains('plamen: Hello From Plamen');
    });

    
})