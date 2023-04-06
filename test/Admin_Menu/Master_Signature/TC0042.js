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
  it('Create Signature', async function() {
    
    /* Dapat tambah data Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Klik tombol Add Signature
      * Isi form Form Signature
      * Klik tombol Submit
      * Tampil notifikasi sukses
      * */

    let url = process.env.URL_Cloud;
    await driver.get(url+"user");
    await driver.sleep(7000);
    await driver.findElement(By.css(".btn-primary:nth-child(1)")).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.css("#mat-option-2 > .mat-option-text")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:\\Users\\Brambudi\\Pictures\\javan issue\\Sample-jpg-image-50kb.jpg');
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
