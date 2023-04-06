const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

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
  it('Update Reminder Config', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/config");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="example-time-input"]')).sendKeys("1000");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-my-config/div/div[3]/button')).click();
    await driver.sleep(5000);
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
