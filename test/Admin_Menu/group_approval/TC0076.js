const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.Admin_Cloud_EMAIL;
    let pswd = process.env.Admin_Cloud_PASSWORD;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Create Group Approval', async function() {


    //Group Approval
    // await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    var ele = driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'Admin Menu')]")));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.xpath(ele + "/span[contains(text(), 'Group Approval')]")));
    // await driver.sleep(7000);
    // await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-group-approval/div/div[1]/div[2]/button')).click();
    // await driver.sleep(3000);
    // // Form Create Group Approval
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[1]/div/input')).sendKeys('test Add Group Approval');
    // // Add member in Form
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[1]')).click();
    // await driver.findElement(By.xpath('//*[@id="mat-option-2"]')).click();
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[2]/button')).click();
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[1]')).click();
    // await driver.findElement(By.xpath('//*[@id="mat-option-3"]')).click();
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[2]/div[2]/button')).click();
    // //Submit
    // await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[3]/button')).click();
    // await driver.sleep(8000);
    // //Assertion
    // let validasi = await driver.findElement(By.xpath('//*[@id="swal2-html-container"]')).getText();
    // expect(validasi).to.contains("Success");
  })
})
