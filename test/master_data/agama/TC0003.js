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
  it('Dapat mengubah data sub menu Agama', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Agama
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
    await ele.click();

    // ubah data agama
    var id = 5;
    var agama = 'Agama yang sudah ada';
    var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="edit('${id}')"]`)));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.name('agama')));
    await ele.clear();
    await ele.sendKeys(agama);
    await driver.findElement(By.xpath('//button[@*="update"]')).click();

    await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Data berhasil diperbarui")]')));
    await driver.sleep(1000);
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
    var agama1 = await ele.getText();
    expect(agama1).to.equal(agama);
  })
})