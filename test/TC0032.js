const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('XL Single Approval', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    // await driver.sleep(3000);
    // await driver.quit();
  })
  it('Document Data Sharing Request - External Submit Request Approval', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    //login
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('liesdal@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);

    //request approval page
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/request-approval");
    await driver.sleep(5000);

    //create request
    await driver.findElement(By.css("#kt_content > div > div > app-request-document > div > div.card-header > div.card-toolbar > button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#mat-select-value-1")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-0 > span > ngx-mat-select-search > div > input")).sendKeys('Document Data Sharing Request');
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-9 > span")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-select-value-3")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-50")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-select-request-document > div > div.modal-footer.ng-star-inserted > button")).click();
    await driver.sleep(5000);

    //form
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(4) > div > input")).sendKeys('Document Data Sharing Request - External (Paralel)');
    await driver.findElement(By.css("#mat-select-value-5 > span > span")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-100")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(7) > div > div > div > input")).sendKeys('Requestor Phone Number');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(9) > div > div > div > input")).sendKeys('Partner Name');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(10) > div > div > div > input")).sendKeys('Partner – PIC Name');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(11) > div > div > div > div > label:nth-child(1) > span")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(11) > div > div > div > div > label:nth-child(2) > span")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(11) > div > div > div > div > label:nth-child(3) > span")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(12) > div > div > div > input")).sendKeys('Reference Agreement');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(13) > div > div > div > input")).sendKeys('Project Name');
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(15) > div > div > div > input")).sendKeys('Data Request Number');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(17) > div > div > div > textarea")).sendKeys('Name of Data');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(18) > div > div > div > input")).sendKeys("Purpose");
    await driver.sleep(3000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(19) > div > div > div > select > option:nth-child(2)")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(20) > div > div > div > select > option:nth-child(2)")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(21) > div > div > div > app-date-select-custom > div > div > input")).sendKeys('20-10-2028');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(22) > div > div > div > select > option:nth-child(3)")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(23) > div > div > div > app-date-select-custom > div > div > input")).sendKeys('20-10-2028');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(24) > div > div > div > input")).sendKeys('123123');
    let input = await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(27) > div > div > div.col-lg-3.col-sm-12.ng-star-inserted > div > div > input"));
    await input.sendKeys("/Users/ardelliapp/Downloads/IOM.docx");
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(31) > div > app-date-select > div > div > input")).sendKeys('20-10-2028');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();
    await driver.sleep(3000);

    //layer 1
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div[1]/div/div/label[1]/span')).click();

    //layer 3
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[3]/div/div[2]/div/div[1]/div/div/label[1]/span')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 4
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-15")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-204 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-207"]')).click();
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
    await driver.findElement(By.css("#mat-option-276 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-351"]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[4]/button')).click();
    await driver.sleep(2000);

    //create document
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > div:nth-child(3) > div > div.btn.btn-primary.font-weight-bold.btn-pill.btn-lg.ng-star-inserted")).click();
    await driver.sleep(13000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window[2]/div/div/app-preview-request-document-modal/div/div[3]/button')).click();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window[2]/div/div/app-preview-request-document-modal/div/div[3]/button')).click();
    await driver.findElement(By.css("#kt_body > ngb-modal-window:nth-child(18) > div > div > app-preview-request-document-modal > div > div.modal-footer.d-flex.justify-content-center.ng-star-inserted > button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})