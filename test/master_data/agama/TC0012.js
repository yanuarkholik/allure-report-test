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
  it('Dapat menghapus data sub menu Agama', async function() {

    /* */
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Agama
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
    await ele.click();

    // hapus data Agama
    var id = 5;
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
    var agama = await ele.getText();
    var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="confirmDelete('${id}')"]`)));
    await ele.click();
    await driver.wait(until.elementLocated(By.xpath(`//div[@id='modal-delete-confirmation']//span[contains(text(), '${agama}')]`)));
    var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="delete('${id}')"]`)))
    await ele.click();

    await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Data berhasil dihapus")]')));
  })
})