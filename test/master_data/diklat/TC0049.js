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
  })
  after(async function() {
    await driver.quit();
  })
  it('Tambah Data Diklat', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(1000);   
    
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

    // Click button Tambah
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(2000);
    await driver.findElement(By.css("input[name='nama_diklat']")).sendKeys('Diklat Lapangan');
    await driver.findElement(By.css("textarea[name='deskripsi']")).sendKeys('Diklat Lapangan');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div/div/div/div")).sendKeys(Key.DOWN);
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div/div/div/div")).sendKeys(Key.DOWN);
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div/div/div/div")).sendKeys(Key.ENTER);
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.css("button[data-btn='save']")).click()
    await driver.sleep(1000);

    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil disimpan')]"));
    
    // let alert = await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/div/div/div/div/div/p[1]")).getText();
    // expect(alert).to.equal('Data berhasil disimpan');
  })
})