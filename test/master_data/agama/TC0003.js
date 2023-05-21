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
      it('[TC0003] Admin dapat melakukan perubahan pada data Agama', async function() {

        /* Admin dapat melakukan perubahan pada data Agama
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik icon edit
          * Edit data sesuai dengan kebutuhan
          * Klik tombol Simpan
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // ubah data agama
        var agama = 'Agama yang belum ada';
        var ele = await driver.wait(until.elementLocated(By.xpath(`//td[contains(text() ,'${agama}')]/preceding-sibling::td[1]`)));
        var id = await ele.getText();
        var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="edit('${id}')"]`)));
        await ele.click();

        var ele = driver.wait(until.elementLocated(By.name('agama')));
        await ele.clear();
        await ele.sendKeys(agama + ' update');
        await driver.findElement(By.xpath('//button[@*="update"]')).click();


        await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Data berhasil diperbarui")]')));
        await driver.sleep(1000);
        var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
        var agama1 = await ele.getText();
        expect(agama1).to.equal(agama + ' update');
      })
    })
  })
})