const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA BANK', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat mengubah data Bank via halaman detail', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Bank
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Bank")));
    await ele.click();

    // ubah detail data Bank
    var id = 10;
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
    var bank = await ele.getText();
    var ele = driver.wait(until.elementLocated(By.xpath(`//button[@*="view('${id}')"]`)));
    await ele.click();
   
    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Detail Bank')]")));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${id}')]`));
    await driver.findElement(By.xpath(`//dd[contains(text(), '${bank}')]`));
    await driver.findElement(By.xpath(`//button[@*="edit('${id}')"]`)).click();
    
    var ele = driver.wait(until.elementLocated(By.name('nama_bank')));
    var bank = 'Bank yang belum ada';
    await ele.clear();
    await ele.sendKeys(bank);
    await driver.findElement(By.xpath('//button[@*="save"]')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//button[@*="index"]')).click();
    await driver.sleep(1000);
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(@class, 'hidden') and contains(text(), '${id}')]/following::td`)));
    var bank1 = await ele.getText();
    expect(bank1).to.equal(bank);
  })
})