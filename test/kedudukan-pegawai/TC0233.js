const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KEDUDUKAN PEGAWAI', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    // await driver.manage().window().setRect({ width: 1680, height: 956 });
  })
  after(async function() {
    await driver.quit();
  })
  it('[Kedudukan Pegawai] Search Positive', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.wait(until.elementLocated(By.css('h1[class="font-bold text-lg my-4"]'))).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kedudukan Pegawai
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kedudukan Pegawai' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kedudukan Pegawai')

    let first_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[3]"));
    expect(first_row).to.exist;
    let keyword = await first_row.getText();


    // search data pppk
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys(keyword, Key.ENTER);
    await driver.sleep(3000);

    // expect first row contains keyword
    let nama_kedudukan = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[3]")).getText();
    expect(nama_kedudukan).to.contains(keyword);

  })
})
