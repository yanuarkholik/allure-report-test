const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('XL Single Approval', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('List Inbox', async function() {
    await driver.get("https://approval-fe.dev.alurkerja.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#email")).sendKeys('approver2@yopmail.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(2000);
    await driver.get("https://approval-fe.dev.alurkerja.com/notification");
    await driver.sleep(5000);
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-my-notification/div/div[1]/div[1]/h3')).getText();
    expect(validasi).to.contains("Notification");
  })
})
