const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var expect = require('chai').expect;
const loginModule = require('../../Login/Login.js');

describe('XL Single Approval - Admin Menu - Master Signature', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
    await loginModule.tanggal();
  })
  it('TC0044 - Delete Signature', async function() {

    /* Dapat menghapus data Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Klik tombol delete pada salah satu data halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[1]/div[2]/div/div[3]/div/input')).sendKeys('ardel');
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[1]/td[6]/a[2]`)).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-user-modal/div[3]/div/button[2]')).click();
    await driver.sleep(1000);
    let btnDelete = await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-user-modal/div[3]/span')).getText();
    expect(btnDelete).to.contains("Signature is deleting");
  })
})
