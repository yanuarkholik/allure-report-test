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
    await driver.quit();
  })
  it('[Kategori Pelanggaran] Administrator tidak dapat tambah Kategori Pelanggaran dengan inputan yang sama pada field Kategori Pelanggaran yang telah ada sebelumnya ', async function() {
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
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[22]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kategori Pelanggaran' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kategori Pelanggaran')

    // get the first row to find kedudukan name that already exists
    let first_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[3]"));
    expect(first_row).to.exist;
    let keyword = await first_row.getText();
    
    // expect button insert
    let button_insert = await driver.wait(until.elementLocated(By.css("button[class='btn bg-green-600 text-white w-left']")));
    expect(button_insert).to.exist;

    // insert new data
    await button_insert.click();
    await driver.wait(until.elementLocated(By.id("modal-create")));
    
    let input = await driver.wait(until.elementLocated(By.name('kategori_pelanggaran')));
    expect(input).to.exist;

    await input.sendKeys(keyword);

    let btn_submit = await driver.findElement(By.css("button[data-btn='save'][class='btn btn-primary md:w-auto w-[48%]']"));
    expect(btn_submit).to.exist;
    await btn_submit.click();
    await driver.sleep(2000);
    
    // await driver.findElement(By.xpath("//p[contains(text(), 'input Kategori Pelanggaran yang anda entrikan sudah ada')]"));
    let notification = await driver.findElement(By.xpath("//p[@x-show='notification.title']"));
    expect(notification).to.exist;

    notification_txt = await notification.getText();
    expect(notification_txt).to.equal('input Kategori Pelanggaran yang anda entrikan sudah ada');

    
    await driver.sleep(8000);
  })
})
