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
  it('Show List User', async function() {

    //User Management
    await driver.get("https://approval-fe.dev.alurkerja.com/user-management");
    await driver.sleep(7000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user-management/div/div[1]/div[1]/h3')).getText();
    expect(validasi).to.contains("User Management");
  })
})
