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
  it('Homepass Request Submit Request Approval', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    //login
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('hdotulong@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);

    //request approval page
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/request-approval");
    await driver.sleep(5000);

    //create request
    await driver.findElement(By.css("#kt_content > div > div > app-request-document > div > div.card-header > div.card-toolbar > button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#mat-select-0")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-0 > span > ngx-mat-select-search > div > input")).sendKeys('Homepass Request');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-20"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.css("#mat-select-value-3")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="mat-option-42"]/span/ngx-mat-select-search/div/input')).sendKeys('add');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="mat-option-44"]')).click();
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-select-request-document > div > div.modal-footer.ng-star-inserted > button")).click();
    await driver.sleep(5000);

    //form
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(4) > div > input")).sendKeys('FIBER HOME - BOGOR');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(7) > div > div > div > input")).sendKeys("TEST");
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(35) > div > app-date-select > div > div > input")).sendKeys('20-10-2028');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();

    //layer 1 dan 2 = group approval flow

    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 3
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-13")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-162"]/span/ngx-mat-select-search/div/input')).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-164")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(4) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 4
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-15")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-227 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-230")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(5) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 5
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-17")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-292 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-359")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[4]/button')).click();
    await driver.sleep(2000);

    //create document
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > div:nth-child(3) > div > div.btn.btn-primary.font-weight-bold.btn-pill.btn-lg.ng-star-inserted")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window[2]/div/div/app-preview-request-document-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})