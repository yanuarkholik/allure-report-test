const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Detail Master Status Anak', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    // await driver.quit();
  })
  it('status anak', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id/login")
    await driver.manage().window().setRect({ width: 683, height: 720 })
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("doni007")
    await driver.findElement(By.id("password")).sendKeys("secret")
    await driver.findElement(By.css(".btn")).click()
    await driver.findElement(By.className("btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 h-12")).click();
    await driver.sleep(3000);   

    //Klik Menu Master Data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(3000);
    //Klik Sub Menu Status Anak
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[33]/a")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Status Anak')
    await driver.sleep(3000);
  })
})