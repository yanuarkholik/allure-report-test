const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var expect = require('chai').expect;
const loginModule = require('../../Login/Login');

describe('XL Single Approval - Admin Menu - Master Signature', function() {
 
  before(async function() {
    let user = process.env.user2;
    let pswd = process.env.pswd2;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
    await loginModule.tanggal();
  })
  it('TC0042 - Create Signature', async function() {
    
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
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[2]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input')).sendKeys('ardel');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input')).sendKeys(Key.ARROW_DOWN);
    await driver.findElement(By.xpath('//*[@id="mat-option-0"]/span/ngx-mat-select-search/div/input')).sendKeys(Key.RETURN);
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:/Users/javan/Pictures/javan issue new/signature.png');
    await driver.sleep(2000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
