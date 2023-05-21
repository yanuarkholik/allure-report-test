const { By, Key, until } = require('selenium-webdriver');
const pages = require('../../../pages/pages');

describe('Simpatik', function() {
  describe('Master Data', function() {
    describe('Master Data Agama', function() {
      before(async function() {
        let user = process.env.user1;
        let pswd = process.env.pswd1;
        await pages.login(user,pswd);
      })
      after(async function() {
        await driver.quit();
      })
      it('[TC0009] Admin dapat melakukan pencarian agama berdasarkan kata yang sesuai', async function() {

        /* Admin dapat melakukan pencarian agama berdasarkan kata yang sesuai
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Input kata kunci yang sesuai pada kolom search
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // mencari data Agama
        var search = "Agama yang belum ada update" ;
        var ele = driver.wait(until.elementLocated(By.name("search")));
        await ele.sendKeys(search);
        await ele.sendKeys(Key.ENTER);
        await driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${search}')]`)));
      })
    })
  })
})
