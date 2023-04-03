const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KELURAHAN', function() {
 
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
  it('[Kelurahan] Administrator dapat bersihkan search bar setelah melakukan pencarian data Kelurahan ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.wait(until.elementLocated(By.css('h1[class="font-bold text-lg my-4"]'))).getText();
    expect(dashboard).to.equal('Dashboard');

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kelurahan
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[21]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kelurahan' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kelurahan')
    
    // get data acuan
    let second_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[4]"));
    expect(second_row).to.exist;
    let keyword = await second_row.getText();
    let data_id = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[2]")).getText();
    let kecamatan = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[3]")).getText();

    // search data
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys(keyword, Key.ENTER);
    await driver.sleep(8000);
    
    let data_after = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]"));
    expect(data_after).to.exist;
    let keyword_2 = await data_after.getText();
    expect(keyword_2).to.contain(keyword);

    // clear data
    let clear_button =  await driver.findElement(By.xpath("//button[@type='reset']"));
    expect(clear_button).to.exist;

    await clear_button.click();
    await driver.sleep(2000);
    let val_search_input = search.getAttribute("value");
    expect(val_search_input).to.be.empty;

  })
})
