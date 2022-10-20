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
  it('Approve (All Layer) - Sequential', async function() {
    await driver.get("https://sap-hotfix.merapi.alurkerja.com");
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);

    //login approval 1
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('yessiedy@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span')).click(); //logout
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);

    //login approval 2
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('pmgmp.pmgm2t@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span')).click(); //logout
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);

    //login approval 3
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('mba.ivonem@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span')).click(); //logout
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);

    //login approval 4
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('mba.putridwihandayan@xl.co.id');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span')).click(); //logout
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);

    //login approval 5
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#email")).sendKeys('riris.766hi@gmail.com');
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys('asdf1234');
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();
    await driver.sleep(3000);
    await driver.get("https://sap-hotfix.merapi.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-approval-document/div/div[2]/div[2]/table/tbody/tr[1]/td[3]/a/span')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-approval-document-modal/div/div[2]/button[3]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[3]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div[3]/div/div[6]/button[1]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_quick_user_toggle"]/div/span')).click(); //logout
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_header"]/div/app-topbar/div[2]/div[2]/app-user-dropdown-inner/div/button')).click();
    await driver.sleep(5000);
  })
})