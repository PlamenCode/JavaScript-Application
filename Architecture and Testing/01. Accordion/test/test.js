const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('N2N tests for accordion task', function (){
   this.timeout(12000);

    before(async () =>{ browser = await chromium.launch({headless: false, slowMo: 500})});
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { await page.close() });
    after(async () => {await browser.close() });

    it('loads static page', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        const content = await page.textContent('.accordion .head span');
        expect(content).to.contains('Scalable Vector Graphics');
    });

    it('toggles content', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.true;
    });

    it('toggles content 2', async () => {
        await page.goto('http://127.0.0.1:5500/01.%20Accordion/index.html');
        await page.click('#ee9823ab-c3e8-4a14-b998-8c22ec246bd3');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');
        await page.click('#ee9823ab-c3e8-4a14-b998-8c22ec246bd3');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');

        expect(visible).to.be.false;
    })

})