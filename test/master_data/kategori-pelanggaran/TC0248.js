const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KATEGORI PELANGGARAN', function() {
 
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
  it('[Kategori Pelanggaran] Administrator dapat menambahkan Kategori Pelanggaran ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kategori Pelanggaran
    await driver.findElement(By.linkText("Kategori Pelanggaran")).click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[22]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kategori Pelanggaran' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kategori Pelanggaran')
    
    // expect button insert
    let button_insert = await driver.wait(until.elementLocated(By.css("button[class='btn bg-green-600 text-white w-left']")));
    expect(button_insert).to.exist;

    // insert new data
    await button_insert.click();
    await driver.wait(until.elementLocated(By.id("modal-create")));
    
    let input = await driver.wait(until.elementLocated(By.name('kategori_pelanggaran')));

    input.sendKeys('Hukuman Pekerjaan Sosial', Key.ENTER);

    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Data berhasil disimpan')]")));

  })
})
