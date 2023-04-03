const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA AGAMA', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat tambah data sub menu Agama lebih dari 50 karakter', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
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