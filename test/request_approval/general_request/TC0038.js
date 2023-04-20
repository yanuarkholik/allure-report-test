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
  it('Berita Acara Serah Terima Submit Request Approval - Sequential', async function() {

    //request approval page
    await driver.get("https://approval-fe.dev.alurkerja.com/request-approval");
    await driver.sleep(5000);

    //create request
    await driver.findElement(By.css("#kt_content > div > div > app-request-document > div > div.card-header > div.card-toolbar > button")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#mat-select-0")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-0 > span > ngx-mat-select-search > div > input")).sendKeys('Berita Acara Serah Terima');
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-3 > span")).click();
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-select-request-document > div > div.modal-footer.ng-star-inserted > button")).click();
    await driver.sleep(5000);

    //form
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(3) > div > input")).sendKeys('test');
    let input = await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div.form-group.row.ng-star-inserted > div.col-lg-2.col-sm-12 > div > div > input"));
    await input.sendKeys("/Users/ardelliapp/Downloads/IOM.docx");
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(10) > div > app-date-select > div > div > input")).sendKeys('20-10-2028');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();

    //layer 1
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div[1]/div/div/label[2]')).click(); //button sequential
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-5")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-83 > span > ngx-mat-select-search > div > input")).sendKeys('director');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-87")).click(); 
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(2) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div.row.ng-star-inserted > div > button")).click();

    //layer 2
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[3]/div/div[2]/div/div[1]/div/div/label[2]')).click(); //button sequential
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[3]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click(); 
    await driver.findElement(By.css("#mat-select-6")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-92"]/span/ngx-mat-select-search/div/input')).sendKeys('test');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-94")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css('#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(3) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 3
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[1]/div/div/label[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-9")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-111"]/span/ngx-mat-select-search/div/input')).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-116")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(4) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 4
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[1]/div/div/label[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-11")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-176 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-179")).click();
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
    await driver.findElement(By.css("#mat-option-241 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-310")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[4]/button')).click();
    await driver.sleep(2000);

    //create document
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > div:nth-child(3) > div > div.btn.btn-primary.font-weight-bold.btn-pill.btn-lg.ng-star-inserted")).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window[2]/div/div/app-preview-request-document-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(3000);

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})