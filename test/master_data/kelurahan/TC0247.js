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
  it('[Kelurahan] Administrator dapat menghapus Kelurahan ', async function() {
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
    expect(list).to.equal('List Kelurahan')

    // search data
    let keyword = 'kamonola';
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys(keyword, Key.ENTER);
    await driver.sleep(8000);

    
    let kelurahan_name = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]")).getText();

    let button_delete = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[5]/div/button[3]"));
    expect(button_delete).to.exist;
    
    await button_delete.click();
    await driver.sleep(5000);

    // delete validation
    await driver.wait(until.elementLocated(By.id("modal-delete-confirmation")));
    // expect text for validation
    let validate_txt = await driver.findElement(By.css('#modal-delete-confirmation .text-slate-500')).getText();
    expect(validate_txt).to.equal('Apakah yakin ingin menghapus nama kelurahan '+ kelurahan_name +' ?');

    // search btn confirm delete
    let btn_confirm = await driver.findElement(By.xpath('//*[@id="modal-delete-confirmation"]/div/div/div/div[2]/button[2]'));
    expect(btn_confirm).to.exist;
    
    await btn_confirm.click();
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Data berhasil dihapus')]")));

  })
})
