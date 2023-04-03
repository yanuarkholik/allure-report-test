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
  it('[Kelurahan] Administrator dapat melihat detail Kelurahan ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
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

    let button_detail = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[5]/div/button[1]"));
    expect(button_detail).to.exist;

    await button_detail.click();
    await driver.sleep(3000);
    
    let title_detail = await driver.wait(until.elementLocated(By.css('h3[class="font-bold text-base leading-6"]'))).getText();
    expect(title_detail).to.equal('Detail Kelurahan');

    // verify first row is the right ID
    let text_id = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[1]/dt")).getText();
    expect(text_id).to.equal('Id');
    let value_id = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[1]/dd")).getText();
    expect(value_id).to.equal(data_id);

    // verify first row is the right Kecamatan
    let text_kecamatan = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[2]/dt")).getText();
    expect(text_kecamatan).to.equal('Kecamatan');
    let value_kecamatan = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[2]/dd")).getText();
    expect(value_kecamatan).to.equal(kecamatan);

    // verify 2nd row is the right name of Kelurahan 
    let text_kelurahan = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[3]/dt")).getText();
    expect(text_kelurahan).to.equal('Kelurahan');

    let value_kelurahan = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[3]/dd")).getText();
    expect(value_kelurahan).to.equal(keyword);

  })
})
