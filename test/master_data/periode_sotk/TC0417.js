const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('simpatik', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.quit();
  })
  it('Administrator dapat melihat detail Periode SOTK', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id");
    await driver.manage().window().maximize();
    await driver.manage().window();
    // login
    await driver.findElement(By.id("username")).sendKeys('doni007');
    await driver.findElement(By.id("password")).sendKeys('secret');
    await driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/form/div[3]/button')).click();
    await driver.sleep(3000);
    // klik menu Master data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    // klik menu STOK
    await driver.findElement(By.xpath("/html/body/nav/ul[1]/li[4]/ul/li[36]/a")).click();
    await driver.sleep(1000);
    //Detail STOK
    await driver.findElement(By.css('button[class="tooltip btn btn-primary-soft text-xs py-1.5 px-2 sm:text-base sm:px-3 sm:py-2 font-bold dark:bg-slate-800"]')).click();
    await driver.sleep(1000);
    //expected result Terdapat List Periode SOTK
    let list = await driver.findElement(By.css('h3[class="font-bold text-base leading-6"]')).getText();
    expect(list).to.equal('Detail Periode SOTK')
  })
})