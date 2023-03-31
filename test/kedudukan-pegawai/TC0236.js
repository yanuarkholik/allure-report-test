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
  it('[Kedudukan Pegawai] Delete', async function() {
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
    
    // search data pppk
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys('pppk', Key.ENTER);
    await driver.sleep(3000);

    // expect first row == pppk
    let nama_kedudukan = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[3]")).getText();
    expect(nama_kedudukan).to.equal('PPPK');

    // expect button delete
    let button_delete = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[4]/div/button[3]"));
    expect(button_delete).to.exist;

    await button_delete.click();
    await driver.sleep(3000);

    // delete validation
    await driver.wait(until.elementLocated(By.id("modal-delete-confirmation")));
    // expect text for validation
    let validate_txt = await driver.findElement(By.css('#modal-delete-confirmation .text-slate-500')).getText();
    expect(validate_txt).to.equal('Apakah yakin ingin menghapus nama kedudukan pegawai '+ nama_kedudukan +' ?');

    // search btn delete 
    let btn_confirm = await driver.findElement(By.xpath('//*[@id="modal-delete-confirmation"]/div/div/div/div[2]/button[2]'));
    expect(btn_confirm).to.exist;
    
    await btn_confirm.click();
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Data berhasil dihapus')]")));
  })
})
