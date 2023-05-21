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
      it('[TC1401] Admin dapat melakukan perubahan pada data Agama pada halaman detail', async function() {

        /* Admin dapat melakukan perubahan pada data Agama pada halaman detail
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik icon detail pada salah satu data
          * Tampil halaman detail data
          * Klik icon edit pada halaman detail
          * Ubah data sesuai kebutuhan
          * Klik tombol Simpan
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // detail data Agama
        var ele = driver.wait(until.elementLocated(By.xpath("//tr[1]/td[2]")));
        var id = await ele.getText();
        var ele = driver.wait(until.elementLocated(By.xpath("//tr[1]/td[3]")));
        var agama = await ele.getText();

        var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="view('${id}')"]`)));
        await ele.click();
      
        await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Detail Agama')]")));
        await driver.findElement(By.xpath(`//dd[contains(text(), '${id}')]`));
        await driver.findElement(By.xpath(`//dd[contains(text(), '${agama}')]`));
        await driver.findElement(By.xpath(`//button[@*="edit('${id}')"]`)).click();
        
        var ele = driver.wait(until.elementLocated(By.name('agama')));
        var agama = 'Agama yang belum ada edited';
        await ele.clear();
        await ele.sendKeys(agama);
        await driver.findElement(By.xpath('//button[@*="save"]')).click();
        var ele = driver.wait(until.elementLocated(By.xpath('//button[@*="index"]')));
        await ele.click();
        await driver.sleep(1000);
        var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
        var agama1 = await ele.getText();
        expect(agama1).to.equal(agama);

      })
    })
  })
})