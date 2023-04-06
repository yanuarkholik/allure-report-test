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
  it('Edit Group Approval', async function() {

    //Group Approval
    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-group-approval/div/div[2]/div[2]/table/tbody/tr[1]/td[5]/a[1]')).click();
    await driver.sleep(3000);
    // Form Edit Group Approval
    let input = await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[2]/form/div[1]/div/input'));
    input.clear();
    input.sendKeys('test Edit Group Approval');
    //Submit
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[3]/button')).click();
    await driver.sleep(8000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-html-container"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
