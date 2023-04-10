const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
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
  it('Show Master Signature ', async function() {

    /* Dapat menampilkan halaman Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Dapat menampilkan halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[1]/div[1]/h3')).getText();
    expect(namaDashboard).to.contains("Master Signature");
  })
})
