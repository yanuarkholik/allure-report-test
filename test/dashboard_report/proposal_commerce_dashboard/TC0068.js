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
  it('Proposal Commerce Dashboard - Search Proposal Commerce Dashboard', async function() {
  
    await driver.get("https://approval-fe.dev.alurkerja.com/proposal-commerce-dashboard");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-proposal-commerce-dashboard/div[2]/div/div/div[1]/div[2]/div/div/input')).sendKeys('PC/I/Learning_Development/102022/010');
    await driver.sleep(7000);
    let ReqidTampil = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-proposal-commerce-dashboard/div[2]/div/div/div[2]/div/table/tbody/tr/td[3]')).getText();
    expect(ReqidTampil).to.contains("PC/I/Learning_Development/102022/010");
  })
})