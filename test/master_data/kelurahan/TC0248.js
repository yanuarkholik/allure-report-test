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
  it('[Kelurahan] Administrator dapat melihat list Kelurahan ', async function() {
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
    await driver.findElement(By.linkText("Kelurahan")).click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[21]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kelurahan' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kelurahan');
    
    let first_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]"));
    expect(first_row).to.exist;
    let keyword = await first_row.getText();
    let data_id = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[2]"));
    expect(data_id).to.exist;
    let kecamatan = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[3]"));
    expect(kecamatan).to.exist;

    let button_detail = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[5]/div/button[1]"));
    expect(button_detail).to.exist;
    let button_edit = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[5]/div/button[2]"));
    expect(button_edit).to.exist;
    let button_delete = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[5]/div/button[3]"));
    expect(button_delete).to.exist;

    let number_col = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[1]"));
    expect(number_col).to.exist;
    let number = await number_col.getText();
    expect(number).to.equal('1');
  })
})
