const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

describe('Login', () => {
    it('Login with 20210284', async () => {
        var driver = await new Builder()
            .forBrowser('chrome')
            .build();

        await driver.get('https://plataformavirtual.itla.edu.do/login/index.php');
        await takeScreenshot(driver, 'get-login-page');

        await driver.findElement(By.id("username")).sendKeys('20210284');
        await takeScreenshot(driver, 'enter-username');

        await driver.findElement(By.css("#password")).sendKeys('Junior,07');
        await takeScreenshot(driver, 'enter-password');

        await driver.findElement(By.id("loginbtn")).click();
        await takeScreenshot(driver, 'click-login-button');

        await driver.sleep(5000);

        await driver.quit();
    });
});

async function takeScreenshot(driver, stepName) {
    const screenshot = await driver.takeScreenshot();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = path.join(__dirname, `${stepName}-${timestamp}.png`);
    fs.writeFileSync(screenshotPath, screenshot, 'base64');
    console.log(`Captura de pantalla guardada: ${screenshotPath}`);
}

