const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var expect = require('chai').expect;
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
  it('List Inbox', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/notification");
    await driver.sleep(5000);

    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Notification')]")));
    await driver.findElement(By.xpath("//button[contains(text(), 'Mark All as Read')]")).click();

    var ele = driver.wait(until.elementLocated(By.xpath("//h2[@id='swal2-title']")));
    var text = await ele.getText();
    expect(text).to.equal('Success');
    await driver.findElement(By.xpath("//button[contains(text(), 'OK')]")).click();

    await driver.wait(until.elementLocated(By.xpath("//td[4]/span[contains(@class, 'xl-color') and text()='Read']")));
  })
})
