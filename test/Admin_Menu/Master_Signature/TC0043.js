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
  it('Edit Signature', async function() {

    /* Dapat mengubah data Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Dapat menampilkan halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(7000);
    
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[3]/td[6]/a')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:\Users\javan\Pictures\javan issue new\Sample-jpg-image-50kb.jpg');
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
