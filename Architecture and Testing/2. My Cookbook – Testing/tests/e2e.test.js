const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser;
let context;
let page;

describe('N2N tests for My Cookbook', function (){
    this.timeout(12000);

    before(async () =>{ browser = await chromium.launch({headless: false, slowMo: 500})});
    beforeEach(async () => { page = await browser.newPage() });
    afterEach(async () => { await page.close() });
    after(async () => {await browser.close() });

    
})
