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
  it('Proposal Commerce Dashboard - Download Proposal Commerce Dashboard', async function() {
    await driver.get("https://approval-fe.dev.alurkerja.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#email")).sendKeys('frezybangun@gmail.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('12345678');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(2000);
    await driver.get("https://approval-fe.dev.alurkerja.com/proposal-commerce-dashboard");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-proposal-commerce-dashboard/div[2]/div/div/div[1]/div[1]/h3/button')).click();
    await driver.sleep(10000);
    let ReqidTampil = await driver.findElement(By.css("#kt_content > div > div > app-proposal-commerce-dashboard > div:nth-child(1) > div > div > div > div > h3")).getText();
    expect(ReqidTampil).to.contains("Proposal Commerce Dashboard");
  })
})



