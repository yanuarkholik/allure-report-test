const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.Admin2_Cloud_EMAIL;
    let pswd = process.env.Admin2_Cloud_PASSWORD;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('BICC Adhoc Request Approval - Sequential', async function() {

    //request approval page
    await driver.get("https://approval-fe.dev.alurkerja.com/request-approval");
    await driver.sleep(5000);

    //create request
    await driver.findElement(By.css("#kt_content > div > div > app-request-document > div > div.card-header > div.card-toolbar > button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-select-value-1")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-0 > span > ngx-mat-select-search > div > input")).sendKeys('BICC');
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-4")).click();
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-select-request-document > div > div.modal-footer.ng-star-inserted > button")).click();
    await driver.sleep(5000);

    //form
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(3) > div > input")).sendKeys('Document Name Test');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(4) > div > div > div > textarea")).sendKeys('Background & Objective');
    let input = await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(5) > div > div > div.col-lg-3.col-sm-12.ng-star-inserted > div > div > input"));
    await driver.sleep(2000);
    await input.sendKeys("/Users/ardelliapp/Downloads/IOM.docx");
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(6) > div > div > div > textarea")).sendKeys('Summary request test');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(7) > div > div > div > input")).sendKeys('approver2@yopmail.com');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(8) > div > div > div > input")).sendKeys('6281371650455');
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(9) > div > div > div > select > option:nth-child(2)")).click();
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(13) > div > app-date-select > div > div > input")).sendKeys('20-10-2028');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();
    await driver.sleep(5000);

    //layer 2
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 3
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[1]/div/div/label[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-9")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="mat-option-87"]/span/ngx-mat-select-search/div/input')).sendKeys('test');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-89")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(4) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 4
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[1]/div/div/label[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-11")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-106 > span > ngx-mat-select-search > div > input")).sendKeys('test');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-109")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(5) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 5
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[1]/div/div/label[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-13")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-125 > span > ngx-mat-select-search > div > input")).sendKeys('test');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-146")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[4]/button')).click();
    await driver.sleep(2000);

    //create document
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > div:nth-child(3) > div > div.btn.btn-primary.font-weight-bold.btn-pill.btn-lg.ng-star-inserted")).click();
    await driver.sleep(15000);
    await driver.findElement(By.css("#kt_body > ngb-modal-window:nth-child(18) > div > div > app-preview-request-document-modal > div > div.modal-footer.d-flex.justify-content-center.ng-star-inserted > button")).click();
    await driver.findElement(By.css("#kt_body > ngb-modal-window:nth-child(18) > div > div > app-preview-request-document-modal > div > div.modal-footer.d-flex.justify-content-center.ng-star-inserted > button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})