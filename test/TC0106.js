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
  it('IOM Revise - 1 Layer', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    //login approval for reject document
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('yessiedy@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(6000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-tab-content-0-0 > div > div:nth-child(4) > div > div > div > div > textarea")).sendKeys("revise iom");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[2]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(5000);

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})