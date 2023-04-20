const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Admin Dashboard View - Search Admin Dashboard View', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/admin-reporting-view");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[1]/div[2]/div/div/input')).sendKeys('IOM/Digital_Platform/102022/034');
    await driver.sleep(7000);
    let ReqidTampil = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[2]/div/table/tbody/tr/td[5]')).getText();
    expect(ReqidTampil).to.contains("IOM/Digital_Platform/102022/034");
  })
})



