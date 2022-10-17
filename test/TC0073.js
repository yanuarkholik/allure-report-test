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
  it('Edit Role Menu Mapping', async function() {
    await driver.get("https://approval-fe.dev.alurkerja.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#email")).sendKeys('rahmi@javan.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('123456');
    await driver.findElement(By.css("#email")).sendKeys('frezybangun@gmail.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('12345678');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(2000);
    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/role-menu-mapping");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-menu-mapping/div/div[2]/div[2]/table/tbody/tr[1]/td[5]/a[1]')).click();
    await driver.sleep(12000);
    // Form Edit New Role
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-role-menu-modal/div/div[2]/form/div[1]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-role-menu-modal/div/div[2]/form/div[1]/div/input')).sendKeys('Testing Edit Role');
    //Submit
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-role-menu-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
