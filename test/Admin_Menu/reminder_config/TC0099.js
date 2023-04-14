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
  it('TC0099 - List Reminder Config', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/config");
    var validasi = driver.wait(until.elementLocated(By.xpath('//*[@id="kt_content"]/div/div/app-my-config/div/div[1]/div[1]/h3')));
    var textValidasi = await validasi.getText();
    expect(textValidasi).to.contains("Config Reminder");
  })
})
