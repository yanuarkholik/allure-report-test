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
  it('Add New Role Menu Mapping', async function() {

    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/role-menu-mapping");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-role-menu-mapping/div/div[1]/div[2]/button')).click();
    await driver.sleep(12000);
    // Form Add New Role
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-role-menu-modal/div/div[2]/form/div[1]/div/input')).sendKeys('Testing Role');
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-role-menu-modal/div/div[2]/form/div[2]/div/textarea')).sendKeys('Untuk Testing');
    // Dropdown Menu Access
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-role-menu-modal/div/div[2]/form/div[3]/div')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input')).sendKeys('Dashboard',Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input')).sendKeys(Key.TAB);
    // Dropdown Document Category Access
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-role-menu-modal/div/div[2]/form/div[4]/div')).click();
    await driver.findElement(By.xpath('//*[@id="mat-option-1"]/span/ngx-mat-select-search/div/input')).sendKeys('test',Key.RETURN)
    await driver.findElement(By.xpath('//*[@id="mat-option-1"]/span/ngx-mat-select-search/div/input')).sendKeys(Key.TAB)
    //Submit
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-add-role-menu-modal/div/div[3]/button')).click();
    await driver.sleep(3000);
    //Assertion
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
