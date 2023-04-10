const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA DEPARTEMEN', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat tambah data sub menu Departemen dengan lebih dari 200 karakter', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Departemen
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Departemen")));
    await ele.click();

    // tambah data Departemen
    var departemen = "Departemen yang kodenya lebih dari 200 karakter, coba hitung aja kalo bisa. Atau kalau emang belum yakin ya gini aja deh, cari aja word counter di google terus copas text ini biar yakin kalo ini lebih dari 200 karakter.";
    var nama = "Departemen yang namanya lebih dari 200 karakter, coba hitung aja kalo bisa. Atau kalau emang belum yakin ya gini aja deh, cari aja word counter di google terus copas text ini biar yakin kalo ini lebih dari 200 karakter.";
    await driver.findElement(By.css(".bg-green-600")).click();
    var ele = driver.wait(until.elementLocated(By.name("kode")));
    await ele.sendKeys(departemen);
    await driver.findElement(By.name("nama")).sendKeys(nama);
    await driver.findElement(By.id("radio-aktif-1")).click();
    await driver.findElement(By.css("button[data-btn='save']")).click();
    await driver.wait(until.elementsLocated(By.xpath("//*[contains(text(), 'Berkas maksimal berisi 200 karakter.')]")));
  })
})