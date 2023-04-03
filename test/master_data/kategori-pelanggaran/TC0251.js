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
  it('[Kategori Pelanggaran] Administrator tidak dapat tambah Kategori Pelanggaran dengan inputan kosong pada field yang bersifat wajib diisi', async function() {
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
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[22]/a")).click();
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
    expect(input).to.exist;
    
    let btn_submit = await driver.findElement(By.css("#modal-create > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)"));
    expect(btn_submit).to.exist;
    await btn_submit.click();
    await driver.sleep(2000);
    
    let mandatory_txt = await driver.wait(until.elementLocated(By.css("div[class='text-danger mt-1']")));
    expect(mandatory_txt).to.exist;
    let mandatory_txt_value = await mandatory_txt.getText();
    expect(mandatory_txt_value).to.contains('Kategori Pelanggaran wajib diisi.');

    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Ada Kesalahan Input')]")));
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Cek kembali isian Anda!')]")));

  })
})