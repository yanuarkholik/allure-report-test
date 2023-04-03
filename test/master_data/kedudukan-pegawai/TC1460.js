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
  it('[Kedudukan Pegawai] Administrator dapat melihat list Kedudukan Pegawai', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(5000);   
    
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
    expect(list).to.equal('List Kedudukan Pegawai')

    // expect button search
    let search_btn = await driver.findElement(By.css("span[class='hidden sm:inline ml-2']")).getText();
    expect(search_btn).to.equal('Cari')
    // print("ada button cari");
    // expect button detail
    // /html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[1]/td[4]/div/button[1]
    let buttons = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]/div/button"));
    // let pj = buttons.size();
    // expect(pj).to.equal(3);
    // expect(buttons.length).to.equal(3);
    let button_detail = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]/div[1]/button[1]"));
    expect(button_detail).to.exist;
    let button_edit = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]/div[1]/button[2]"));
    expect(button_edit).to.exist;
    let button_delete = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]/div[1]/button[3]"));
    expect(button_delete).to.exist;

    let first_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[1]"));
    expect(first_row).to.exist;
    let number = await first_row.getText();
    expect(number).to.equal('1');
  })
})
