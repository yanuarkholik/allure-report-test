const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA BANK', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.manage().window().setRect({ width: 1680, height: 956 });
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat tambah data sub menu Bank dengan lebih dari 200 karakter', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Bank
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Bank")));
    await ele.click();

    // tambah data bank
    var bank = "Bank yang namanya lebih dari 200 karakter, coba hitung aja kalo bisa. Atau kalau emang belum yakin ya gini aja deh, cari aja word counter di google terus copas text ini biar yakin kalo ini lebih dari 200 karakter.";
    await driver.findElement(By.css(".bg-green-600")).click();
    var ele = driver.wait(until.elementLocated(By.name("nama_bank")));
    await ele.sendKeys(bank);
    await driver.findElement(By.css("button[data-btn='save']")).click();
    await driver.wait(until.elementsLocated(By.xpath("//*[contains(text(), 'Bank maksimal berisi 200 karakter.')]")));
  })
})