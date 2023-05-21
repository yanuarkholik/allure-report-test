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
      it('[TC0005] Admin tidak dapat tambah Agama dengan inputan yang sama dengan Agama yang telah ada sebelumnya', async function() {

        /* Admin tidak dapat tambah Agama dengan inputan yang sama dengan Agama yang telah ada sebelumnya
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik tombol Tambah Agama
          * Isi form Agama dengan inputan yang sudah ada di tabel list
          * Klik tombol Simpan
          * Terdapat warning data yang diinputkan sudah ada
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // tambah data agama
        var agama = "Agama yang belum ada update";
        await driver.findElement(By.css(".bg-green-600")).click();
        var ele = driver.wait(until.elementLocated(By.name("agama")));
        await ele.sendKeys(agama);
        await driver.findElement(By.css("button[data-btn='save']")).click();
        await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'sudah ada')]")));
      })
    })
  })
})