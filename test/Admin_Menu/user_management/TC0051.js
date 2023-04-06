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
  it('Edit User', async function() {

    //User Management
    await driver.get("https://approval-fe.dev.alurkerja.com/user-management");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user-management/div/div[2]/div[2]/table/tbody/tr[1]/td[6]/a[1]')).click();
    await driver.sleep(3000);
    //Form Edit User
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/form/div[1]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/form/div[1]/div/input')).sendKeys('Edit User With Automation');
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
