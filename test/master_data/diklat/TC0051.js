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
  it('Update Data Diklat', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(2000);   
    
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

    // Click button Edit
    await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[5]/div[1]/button[2]")).click()
    await driver.sleep(2000);
    
    //Make changes as needed
    await driver.findElement(By.css("input[name='nama_diklat']")).clear();
    await driver.findElement(By.css("textarea[name='deskripsi']")).clear();
    await driver.sleep(2000);
    await driver.findElement(By.css("input[name='nama_diklat']")).sendKeys('Administrasi Perkantoran Desa');
    await driver.findElement(By.css("textarea[name='deskripsi']")).sendKeys('Administrasi Perkantoran Desa');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-edit-body']/form/div/div/div/div")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@id='modal-edit-body']/form/div/div/div/div/div/div[1]/input")).sendKeys('Lokakarya');
    await driver.sleep(1500);
    // await driver.findElement(By.xpath("//*[@id='modal-edit-body']/form/div/div/div/div/div/div[1]/input")).sendKeys(Key.DOWN);
    await driver.sleep(1500);
    await driver.findElement(By.xpath("//*[@id='modal-edit-body']/form/div/div/div/div/div/div[2]/div")).click();
    await driver.sleep(2500);
    await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[3]/button[2]')).click()
    await driver.sleep(1500);
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil diperbarui')]"));

  })
})
