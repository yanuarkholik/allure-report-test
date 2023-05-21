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
      it('[TC0012] Admin dapat menghapus agama', async function() {

        /* Admin dapat menghapus agama
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik icon hapus pada salah satu data
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // hapus data Agama
        var agama = 'Agama yang belum ada';
        var ele = await driver.wait(until.elementLocated(By.xpath(`//td[contains(text() ,'${agama}')]/preceding-sibling::td[1]`)));
        var id = await ele.getText();
        var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="confirmDelete('${id}')"]`)));
        await ele.click();
        await driver.wait(until.elementLocated(By.xpath(`//div[@id='modal-delete-confirmation']//span[contains(text(), '${agama}')]`)));
        var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="delete('${id}')"]`)))
        await ele.click();

        await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Data berhasil dihapus")]')));
      })
    })
  })
})
