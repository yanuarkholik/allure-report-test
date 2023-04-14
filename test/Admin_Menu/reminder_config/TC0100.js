const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login.js');
var expect = require('chai').expect;

describe('Config Reminder', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.quit();
  })
  it('TC0100 - Update Reminder Config', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/config");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="example-time-input"]')).sendKeys("1100");
    // await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-my-config/div/div[3]/button')).click();
    await driver.sleep(5000);
    var validasi = driver.wait(until.elementLocated(By.xpath('//*[@id="swal2-title"]')));
    var textValidasi = await validasi.getText();
    expect(textValidasi).to.contains("Success");
  })
})
