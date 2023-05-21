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
      it('[TC0002] Admin dapat melihat detail data Agama', async function() {

        /* Admin dapat melihat detail data Agama
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik icon detail pada salah satu data
          * */

        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // klik icon detail data Agama
        var text = 'Agama yang belum ada';
        var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(text() ,'${text}')]/preceding-sibling::td[1]`)));
        var id = await ele.getText();
        var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(text() ,'${text}')]/following::td//button[1]`)));
        await ele.click();

        // validasi halaman detail Agama
        await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Detail Agama')]")));
        await driver.findElement(By.xpath(`//dd[contains(text(), '${id}')]`));
        await driver.findElement(By.xpath(`//dd[contains(text(), '${text}')]`));
        await driver.findElement(By.xpath("//button//span[contains(text(), 'Kembali')]")).click();
      })
    })
  })
})