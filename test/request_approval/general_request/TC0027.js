const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Inter Office Memo Submit Request Approval', async function() {

    //request approval page
    await driver.get("https://approval-fe.dev.alurkerja.com/request-approval");
    await driver.sleep(5000);

    //create request
    await driver.findElement(By.xpath("//div[contains(@class, 'card-toolbar')]/button [contains(text(), 'Request Approval')]")).click();
    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Select') and @id='example-modal-sizes-title-lg']")));
    await driver.findElement(By.xpath("//mat-select[@role='combobox']")).click();
    var cat = 'Inter Office Memo';
    await driver.findElement(By.xpath("//input[@aria-label='dropdown search']")).sendKeys(cat);
    var ele = driver.wait(until.elementLocated(By.xpath(By.xpath(`//span[contains(text(), '${cat}')]`))));                                                                                                          

    await driver.findElement(By.id("mat-select-2")).click();
    var subcat = 'test subcategory';
    await driver.findElement(By.xpath("//input[@aria-label='dropdown search']")).sendKeys(subcat);
    var ele = driver.wait(until.elementLocated(By.xpath(`//mat-select//span[contains(text(), '${subcat}')]`)));
    await ele.click();
    await driver.findElement(By.xpath("//button[contains(text(), 'Submit')]")).click();

    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Create') and @id='example-modal-sizes-title-lg']")));
    await findElement(By.name('description')).sendKeys('')
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[1]/div/div[4]/div/div/div/textarea')).sendKeys('test');
    let input = await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(6) > div:nth-child(3) > div > div > input"));
    await input.sendKeys("/Users/ardelliapp/Downloads/IOM.docx");
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div.card.card-custom.pb-5 > div > div:nth-child(10) > div > app-date-select > div > div > input")).sendKeys('20-10-2028');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();

    //layer 1
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div[1]/div/div/label[1]')).click(); //button sequential
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-5")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-87 > span > ngx-mat-select-search > div > input")).sendKeys('director');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-90")).click(); 
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(2) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 2
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[3]/div/div[2]/div/div[1]/div/div/label[1]')).click(); //button sequential
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[3]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click(); 
    await driver.findElement(By.css("#mat-select-6")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-97 > span > ngx-mat-select-search > div > input")).sendKeys('test');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-99")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(3) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 3
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[4]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-8")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-116 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-119")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(4) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 4
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[5]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-11")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-188 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-190")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > form > div:nth-child(2) > div:nth-child(5) > div > div.card-body > div > div.form-group.row.mt-0 > div.col-lg-2.mt-3.ng-star-inserted > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[7]/div/button')).click(); //add layer button

    //layer 5
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[1]/div/div/label[1]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[2]/select/option[2]')).click();
    await driver.findElement(By.css("#mat-select-value-13")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-option-260 > span > ngx-mat-select-search > div > input")).sendKeys('t');
    await driver.sleep(5000);
    await driver.findElement(By.id("mat-option-335")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[2]/div[6]/div/div[2]/div/div[2]/div[4]/button')).click();
    await driver.sleep(2000);

    //create document
    await driver.findElement(By.css("#kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12.ng-star-inserted > div > div:nth-child(3) > div > div.btn.btn-primary.font-weight-bold.btn-pill.btn-lg.ng-star-inserted")).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window[2]/div/div/app-preview-request-document-modal/div/div[3]/button')).click();
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})