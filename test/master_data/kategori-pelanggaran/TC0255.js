const { clear } = require('console');
const exp = require('constants');
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
    // await driver.quit();
  })
  it('[Kategori Pelanggaran] Administrator dapat mengurutkan Kategori Pelanggaran secara descending ', async function() {
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
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kategori Pelanggaran' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kategori Pelanggaran');

    // double click 
    // var doubleClick = driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[4]'));
    // var actions = driver.actions({bridge: true});
    // actions.doubleClick(doubleClick).perform();

    // get the table 
    let table = await driver.findElement(By.css("table[class='table m-b-0 table-striped text-xs md:text-sm']"));
    expect(table).to.exist;
    
    await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[2]")).click();
    await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[2]")).click();
    let first_id_row = await driver.findElement(By.xpath("(//div[@class='box']/div/div/table/tbody/tr[1]/td[2])")).getText();
    expect(first_id_row).to.not.equal('1');
    

  })
})
