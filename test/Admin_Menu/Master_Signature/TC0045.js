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
  it('Search Signature', async function() {

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
    await driver.wait(until.elementsLocated(By.xpath(`//td[contains(text(), '${search}']`)));
  })
})
