const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let url = process.env.URL_Cloud;
    let user = process.env.Admin2_Cloud_EMAIL;
    let pswd = process.env.Admin2_Cloud_PASSWORD;
    let sendria = process.env.URL_Sendria;
    await loginModule.login(user,pswd, url, sendria);
  })
  after(async function() {
    await driver.sleep(3000);
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
