const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var expect = require('chai').expect;
const loginModule = require('../../Login/Login.js');

describe('XL Single Approval', function() {
 
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
  it('Edit Signature', async function() {

    /* Dapat mengubah data Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Dapat menampilkan halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[1]/div[2]/div/div[3]/div/input')).sendKeys('ardel');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[1]/td[6]/a')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/button')).click();
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:/Users/javan/Pictures/javan issue new/signature2.png');
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
