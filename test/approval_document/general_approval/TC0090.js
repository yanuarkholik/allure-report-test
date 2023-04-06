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
  it('Submit Revised Document - BICC Adhoc', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    //login approval for revise document
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('lindas@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(6000);
        //search by category but still not working
    // await driver.findElement(By.css("#mat-option-0 > span > ngx-mat-select-search > div > input")).click();
    // await driver.sleep(5000);
    // await driver.findElement(By.css("#mat-option-13")).click();
    // await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(6000);
    await driver.findElement(By.xpath('//*[@id="mat-tab-content-0-0"]/div/div[5]/div/div/div/div/textarea')).sendKeys("BICC Adhoc Revised");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[2]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();
    await driver.sleep(2000);

    //logout approval
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span/img')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);

    //login requestor for submit revised document
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('liesdal@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/revised-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-request-document/div/div[2]/div[2]/table/tbody/tr/td[2]/a[2]/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[1]/div/div[6]/div/textarea')).sendKeys(" ");
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[1]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div/div[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > ngb-modal-window:nth-child(16) > div > div > app-preview-request-document-modal > div > div.modal-footer.d-flex.justify-content-center.ng-star-inserted > button")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();

    //test
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})