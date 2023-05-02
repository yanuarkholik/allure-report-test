const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA BERKAS', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat tambah data sub menu Berkas dengan inputan kosong', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Berkas
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Berkas")));
    await ele.click();

    // tambah data Berkas
    var berkas = "  ";
    await driver.findElement(By.css(".bg-green-600")).click();
    var ele = driver.wait(until.elementLocated(By.name("nama_berkas")));
    await ele.sendKeys(berkas);
    await driver.findElement(By.css("button[data-btn='save']")).click();
    await driver.wait(until.elementsLocated(By.xpath("/*[contains(text(), 'Berkas wajib diisi.')]")));
  })
})