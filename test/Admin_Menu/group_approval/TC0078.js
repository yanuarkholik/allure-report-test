const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login');

describe('XL Single Approval - Admin Menu - Group Approval', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await loginModule.tanggal();
    await driver.quit();
  })
  it('TC0078 - Able to remove data Group Approval', async function() {

    /* Dapat hapus data approval pada halaman Group Approval
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Group Approval
      * Tampil halaman Group Approval
      * Klik icon Hapus
      * Klik tombol Delete
      * */
    
    //Group Approval
    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-group-approval/div/div[2]/div[2]/table/tbody/tr[1]/td[5]/a[2]')).click();
    await driver.sleep(3000);
    // Pop Up Delete Group Approval
    let btn = await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-delete-group-approval-modal/div[3]/div/button[2]'));
    btn.click();
    await driver.sleep(3000);

    // Click button on success notification
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
