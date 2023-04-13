const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Google Search', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Dapat klik search recomendation pada halaman Gambar', async function() {
    await driver.get("https://www.google.com/");
    await driver.manage().window().maximize();

    await driver.findElement(By.name('q')).sendKeys('mochawesome', Key.RETURN);
    await driver.wait(until.elementLocated(By.xpath('//*[contains(text(), "mochawesome")]')));
    await driver.findElement(By.xpath("//a[contains(text(), 'Gambar')]")).click();
    var ele = driver.wait(until.elementLocated(By.name('q')));
    await ele.clear();
    await ele.sendKeys('mochawesome');
    var ele = driver.wait(until.elementLocated(By.xpath("//div[contains(@*, 'presentation')]//li[2]")));
    await ele.click();
  })
})
