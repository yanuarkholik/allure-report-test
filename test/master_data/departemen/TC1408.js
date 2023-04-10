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
  it('Dapat filter data sub menu Departemen', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Departemen
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Departemen")));
    await ele.click();

    // filter data Departemen
    await driver.findElement(By.css(".dropdown-toggle.btn")).click();
    var ele = driver.wait(until.elementLocated(By.css(".ts-control")));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Aktif')]")));
    await ele.click();
    await driver.findElement(By.xpath("//span[contains(text(),'Apply')]")).click()
    await driver.findElement(By.css(".dropdown-toggle.btn")).click();
  })
})