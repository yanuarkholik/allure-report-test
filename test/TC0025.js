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
  it('Search Document Category', async function() {
    await driver.get("https://approval-fe.dev.alurkerja.com/");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('rahmi@javan.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('123456');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(5000);
    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_content > div > div > app-documentcategory > div > div.card-body > div.table-responsive.angular-bootstrap-table > table > tbody > tr:nth-child(1) > td:nth-child(7) > a.btn.btn-icon.btn-light.btn-hover-warning.btn-sm")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-warning-documentcategory-modal > div > div.modal-footer > button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > div > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="kt_body"]/div/div')).getText(); 
    expect(namaDashboard).to.contains("Success");
  })
})
