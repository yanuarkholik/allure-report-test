const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user2;
    let pswd = process.env.pswd2;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await loginModule.tanggal();
    await driver.quit();
  })
  it('Able to edit data Group Approval', async function() {

    /* Dapat edit data approval pada halaman Group Approval
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Group Approval
      * Tampil halaman Group Approval
      * Klik icon Edit
      * Edit form Group Approval
      * Klik tombol Submit
      * */

    //Group Approval
    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    await driver.sleep(7000);
    await driver.findElement(By.xpath("//a[@*='Edit']")).click();
    
    // Form Edit Group Approval
    await driver.wait(until.elementLocated(By.xpath("//div[contains(@class, 'modal-title') and contains(text(), ' Edit Group Approval ')]")));
    var ele = driver.findElement(By.name('name'));
    await ele.clear();
    await ele.sendKeys('test Edit Group Approval');
    //Submit
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-group-approval-modal/div/div[3]/button')).click();
    await driver.sleep(8000);

    /// Click button on success notification
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
