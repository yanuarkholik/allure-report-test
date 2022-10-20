const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('XL Single Approval - Group Approval', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Create Group Approval', async function() {
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
    //Group Approval
    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-group-approval/div/div[1]/div[2]/button')).click();
    await driver.sleep(3000);
    // Form Create Group Approval
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[1]/div/input')).sendKeys('test Add Group Approval');
    // Add member in Form
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[1]')).click();
    await driver.findElement(By.xpath('//*[@id="mat-option-2"]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[2]/button')).click();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[1]')).click();
    await driver.findElement(By.xpath('//*[@id="mat-option-3"]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[2]/button')).click();
    //Submit
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[3]/button')).click();
    await driver.sleep(8000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-html-container"]')).getText();
    expect(validasi).to.contains("Success");
  })
})