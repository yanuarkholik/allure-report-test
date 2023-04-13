const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.Admin2_Cloud_EMAIL;
    let pswd = process.env.Admin2_Cloud_PASSWORD;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('List Reminder Config', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/config");
    await driver.sleep(5000);
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-my-config/div/div[1]/div[1]/h3')).getText();
    expect(validasi).to.contains("Config Reminder");
  })
})
