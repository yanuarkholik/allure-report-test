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
  it('Admin - List General Dashboard', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/admin-reporting");
    await driver.sleep(5000);
    let ReqidTampil = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[5]')).getText();
    expect(ReqidTampil).to.contains("IOM/Digital_Platform/102022/034");
  })
})

