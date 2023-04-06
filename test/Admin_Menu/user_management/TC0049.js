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
  it('Create User', async function() {

    //User Management
    await driver.get("https://approval-fe.dev.alurkerja.com/user-management");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user-management/div/div[1]/div[2]/button')).click();
    await driver.sleep(3000);
    //Form Add User
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-user-modal/div/div[2]/form/div[1]/div/input')).sendKeys('Add User With Automation');
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-user-modal/div/div[2]/form/div[2]/div/input')).sendKeys('a@a.a');
    //Role Dropdown
    await driver.findElement(By.xpath(`//*[@id="mat-select-0"]`)).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="mat-option-2"]')).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-user-modal/div/div[2]/form/div[4]/div/input')).sendKeys('User Test');
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-user-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    //Assertion
    let validation = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user-management/div/div[2]/div[2]/table/tbody/tr[1]/td[2]')).getText();
    expect(validation).to.contains("Add User With Automation");
  })
})
