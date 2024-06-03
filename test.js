const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://geolocdatabase.web.app/');

    try {
        await page.click('#profileButton');
        console.log('Test passed: Button clicked successfully');
    } catch (error) {
        console.error('Test failed: Unable to click the button');
        process.exit(1);
    }

    await browser.close();
})();
