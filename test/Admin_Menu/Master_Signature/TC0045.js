const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var expect = require('chai').expect;
const loginModule = require('../../Login/Login.js');

describe('Master Signature', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.quit();
    await loginModule.tanggal();
  })
  it('TC0045 - Search Signature', async function() {

    /* Mencari data signature berdasakan kata kunci yang valid pada halaman Master Signature
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Master Signature
      * Input kata kunci yang valid pada kolom Search Name
      * Tekan tombol Enter
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/user");

    var search = 'riris'
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="name"]')));
    await ele.sendKeys(search, Key.RETURN);
    await driver.sleep(4000)

    var result = driver.wait(until.elementLocated(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[1]/td[2]')));
    var textResult = await result.getText();
    expect(textResult).to.contains("Riris");
  })
})
