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
  it('Create Signature', async function() {
    let url = process.env.URL_Cloud;
    let user = process.env.Admin_Cloud_EMAIL;
    let pswd = process.env.Admin_Cloud_PASSWORD;
    await driver.get(url);
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    
    await driver.findElement(By.css("#email")).sendKeys(user);
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys(pswd);
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(2000);
    // Master Signature
    await driver.get(url+"user");
    await driver.sleep(7000);
    await driver.findElement(By.css(".btn-primary:nth-child(1)")).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-2 > .mat-option-text")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:\\Users\\Brambudi\\Pictures\\javan issue\\Sample-jpg-image-50kb.jpg');
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
