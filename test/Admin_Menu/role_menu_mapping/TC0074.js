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
  it('Delete Role Menu Mapping', async function() {

    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/role-menu-mapping");
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-menu-mapping/div/div[2]/div[2]/table/tbody/tr[1]/td[5]/a[2]')).click();
    await driver.sleep(5000);
    // Pop Up Confirmation Delete
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-role-menu-modal/div[3]/div/button[2]')).click();
    await driver.sleep(3000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
