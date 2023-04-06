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
  it('Delete Signature', async function() {

    /* Dapat menghapus data Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Klik tombol delete pada salah satu data halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(10000);
    
    await driver.findElement(By.xpath(`//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[2]/td[6]/a[2]`)).click();
    await driver.sleep(3000);
    let btnDelete = await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-user-modal/div[2]/span')).getText();
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-user-modal/div[3]/div/button[2]')).click();
    // await driver.sleep(2000);
    expect(btnDelete).to.contains("Are you sure to permanently delete this Signature?");
  })
})
