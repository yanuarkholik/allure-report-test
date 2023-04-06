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
  it('Bulk Approval', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/approval-document");
    await driver.sleep(5000);
    await driver.findElement(By.css("#mat-checkbox-2 > label > span.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_content > div > div > app-approval-document > div > div.card-body > div.row.align-items-center.my-3 > div.col-lg-3.col-xl-4 > div > button")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.ml-12.swal2-styled.swal2-default-outline")).click();
    await driver.sleep(3000);
    await driver.findElement(By.css("#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();
    

    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText(); 
    expect(namaDashboard).to.contains("Success");
  })
})
