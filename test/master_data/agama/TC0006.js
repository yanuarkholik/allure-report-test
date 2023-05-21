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
      it('[TC0006] Admin tidak dapat tambah Agama dengan inputan lebih dari 50 karakter', async function() {

        /* Admin tidak dapat tambah Agama dengan inputan lebih dari 50 karakter
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik tombol Tambah Agama
          * Isi form Agama dengan inputan yang lebih dari 50 karakter
          * Klik tombol Simpan
          * Terdapat warning data yang diinputkan lebih dari 50 karakter
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // tambah data agama 50 karakter
        var agama = "Agama yang namanya lebih dari 50 karakter, coba hitung aja kalo bisa";
        await driver.findElement(By.css(".bg-green-600")).click();
        var ele = driver.wait(until.elementLocated(By.name("agama")));
        await ele.sendKeys(agama);
        await driver.findElement(By.css("button[data-btn='save']")).click();
        await driver.wait(until.elementsLocated(By.xpath("//*[contains(text(), 'Agama maksimal berisi 50 karakter.')]")));
      })
    })
  })
})