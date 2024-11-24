const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

describe('Login', ()=>{

    it('Login with 20210284', async()=>{
        var driver = await new Builder()
        .forBrowser('chrome')
        .build();
        await driver.get('https://plataformavirtual.itla.edu.do/login/index.php')
        await driver.findElement(By.id("username")).sendKeys('20210284');
        await driver.findElement(By.css("#password")).sendKeys('Junior,07');
        await driver.findElement(By.id("loginbtn")).click();

        await driver.sleep(5000)

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = path.join(__dirname, 'screenshot.png');
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        
        console.log('Captura de pantalla guardada en: ' + screenshotPath);

        await driver.quit()
    });
})

