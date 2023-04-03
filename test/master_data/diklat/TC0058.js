const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA DIKLAT', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.manage().window().setRect({ width: 1680, height: 956 });

    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(3000);   

  })
  after(async function() {
    await driver.quit();
  })

  it('Bersihkan search bar', async function() {
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Diklat
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[5]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Diklat' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Diklat')

    //Search
    await driver.findElement(By.css("input[placeholder='Cari Diklat']")).sendKeys('XXDWEQJWBSA');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@class='box']/form/div/div[2]/button")).click()
    await driver.sleep(3000);

    //Expect 
    let diklat = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td")).getText();
    expect(diklat).to.equal('Tidak ada data');

    //Klik Bersihkan
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@class='box']/form/div/div[3]/button")).click()
    await driver.sleep(2000);

    //Expect 
    let list_diklat = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[1]")).getText();
    expect(list_diklat).to.equal('1');
  })
})
