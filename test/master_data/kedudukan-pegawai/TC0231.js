// [DOESN'T WORK]
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
    // await driver.quit();
  })
  it('[Kedudukan Pegawai] Administrator dapat mengurutkan Kedudukan Pegawai secara ascending ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kedudukan Pegawai
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kedudukan Pegawai' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kedudukan Pegawai');
    console.log("=====================aaaa");
    // /html/body/div[5]/div/div[2]/div[3]/div/div/table
    // let data_id = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[2]")).getText();
    // let list_data = driver.gettable("//*[@class='box']/div/div/table");

    // get the table 
    let table = await driver.findElement(By.css("table[class='table m-b-0 table-striped text-xs md:text-sm']"));
    expect(table).to.exist;

    for(let t = 0; t < table.length; t++){
        let runner = await table[t].findElement(By.xpath(".//tr/td[1]")).getText();
        console.log(runner);
        print(runner);
      }

      await driver.sleep(4000);
    console.log("=====================aaaa");
  })
})