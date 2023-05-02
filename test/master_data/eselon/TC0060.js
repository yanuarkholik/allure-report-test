const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA ESELON', function() {
 
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
  it('Tambah Data Eselon', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(2000);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Eselon
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[6]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Eselon' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Eselon')

    // Click button Tambah
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(2000);
    await driver.findElement(By.css("input[name='eselon']")).sendKeys('A');
    await driver.findElement(By.css("input[name='tunjangan']")).sendKeys('5000');
    await driver.sleep(1000);
    
    //Dropdown Pangkat Minimal
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[3]/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[3]/div/div/div/div[1]/input")).sendKeys("iii/c");
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[3]/div/div/div/div[2]")).click();
    await driver.sleep(1000);
    
    //Dropdown Pangkat Max
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[4]/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[4]/div/div/div/div[1]/input")).sendKeys("iii/a");
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div[4]/div/div/div/div[2]")).click();

    //Klik Simpan
    await driver.findElement(By.css("button[data-btn='save']")).click()
    await driver.sleep(1000);

    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil disimpan')]"));    
  })
})
