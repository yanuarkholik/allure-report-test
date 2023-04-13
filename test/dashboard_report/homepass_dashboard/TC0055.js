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
  it('Search Homepass Dashboard', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/homepass");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[1]/div[2]/div/div/input')).sendKeys('TDH/DH/Learning_Development/102022/027');
    await driver.sleep(5000);
    let ReqidTampil = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[2]/div/table/tbody/tr/td[3]')).getText();
    expect(ReqidTampil).to.contains("TDH/DH/Learning_Development/102022/027");
  })
})

