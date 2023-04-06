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
  it('Search List Role', async function() {

    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/role-management");
    await driver.sleep(7000);
    //Search
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-user/div/div[2]/div[1]/div[2]/div/div[3]/div/input')).sendKeys('riris',Key.RETURN);
    await driver.sleep(6000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-user/div/div[2]/div[2]/table/tbody/tr[1]/td[2]')).getText();
    expect(validasi).to.contains("Riris");
  })
})
