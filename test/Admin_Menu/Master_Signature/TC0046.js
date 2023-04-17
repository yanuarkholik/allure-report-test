const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');
const loginModule = require('../../Login/Login.js');

describe('XL Single Approval - Admin Menu - Master Signature', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await loginModule.tanggal();
    await driver.quit();
  })
  it('TC0046 - Show Master Signature', async function() {

    /* Dapat menampilkan halaman Master Signature 
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Dapat menampilkan halaman Master Signature
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    var judul = driver.wait(until.elementLocated(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[1]/div[1]/h3')));
    var textJudul = await judul.getText();
    expect(textJudul).to.contains("Master Signature");
  })
})
