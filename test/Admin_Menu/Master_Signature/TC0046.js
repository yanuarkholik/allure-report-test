const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');
const loginModule = require('../../Login/Login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.Admin2_Cloud_EMAIL;
    let pswd = process.env.Admin2_Cloud_PASSWORD;
    await loginModule.login(user,pswd)
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Show Master Signature ', async function() {
    await driver.sleep(1000);
    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[1]/div[1]/h3')).getText();
    expect(namaDashboard).to.contains("Master Signature");
  })
})
