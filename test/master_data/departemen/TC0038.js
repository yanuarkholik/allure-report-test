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
  it('Dapat mengakses halaman detail sub menu Departemen', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Departemen
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Departemen")));
    await ele.click();

    // detail data Departemen
    var id = 10;
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[normalize-space(text())='${id}' and contains(@class,'hidden')]/following::td`)));
    var kode = await ele.getText();
    var ele = driver.findElement(By.xpath(`//td[normalize-space(text())='${id}' and contains(@class,'hidden')]/following::td[2]`));
    var dept = await ele.getText();
    var ele = driver.findElement(By.xpath(`//td[normalize-space(text())='${id}' and contains(@class,'hidden')]/following::td[3]`));
    var status = await ele.getText();
    var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="view('${id}')"]`)));
    await ele.click();
   
    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Detail Departemen')]")));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${id}')]`));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${kode}')]`));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${dept}')]`));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${status}')]`));
  })
})