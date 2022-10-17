const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('XL Single Approval - Role Menu Mapping', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('See List Role Menu Mapping', async function() {
    await driver.get("https://approval-fe.dev.alurkerja.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#email")).sendKeys('rahmi@javan.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('123456');
    // await driver.findElement(By.css("#email")).sendKeys('frezybangun@gmail.com');
    // await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('12345678');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(2000);
    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/role-menu-mapping");
    await driver.sleep(7000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-menu-mapping/div/div[1]/div[1]/h3')).getText();
    expect(validasi).to.contains("Role Menu Mapping");
  })
})
