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
  it('Bulk Approval', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('yessiedy@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(5000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-checkbox-2 > label > span.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_content > div > div > app-approval-document > div > div.card-body > div.row.align-items-center.my-3 > div.col-lg-3.col-xl-4 > div > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.ml-12.swal2-styled.swal2-default-outline")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();
    

    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText(); 
    expect(namaDashboard).to.contains("Success");
  })
})
