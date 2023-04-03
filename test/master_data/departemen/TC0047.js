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
  it('Dapat membersihkan kolom search bar setelah melakukan pencarian data sub menu Departemen', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Departemen
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Berkas")));
    await ele.click();

    // mencari data Departemen
    var search = "Departemen Penerangan" ;
    var ele = driver.wait(until.elementLocated(By.name("search")));
    await ele.sendKeys(search);
    await ele.sendKeys(Key.ENTER);

    // membersigkan search bar
    await driver.findElement(By.xpath("//button[@type='reset']")).click();

    // mencari data Departemen
    var search = "Departemen yang tidak ada" ;
    var ele = driver.wait(until.elementLocated(By.name("search")));
    await ele.sendKeys(search);
    await ele.sendKeys(Key.ENTER);

    // membersigkan search bar
    await driver.findElement(By.xpath("//button[@type='reset']")).click();

  })
})