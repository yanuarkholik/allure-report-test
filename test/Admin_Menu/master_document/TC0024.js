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
  it('Delete Document Category', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_content > div > div > app-documentcategory > div > div.card-body > div.table-responsive.angular-bootstrap-table > table > tbody > tr:nth-child(4) > td:nth-child(7) > a.btn.btn-icon.btn-light.btn-hover-danger.btn-sm")).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#kt_body > ngb-modal-window > div > div > app-delete-documentcategory-modal > div.modal-footer > div > button.btn.btn-primary.btn-elevate")).click();
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_body > div > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline")).click();
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="kt_body"]/div/div')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})