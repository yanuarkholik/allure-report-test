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
  it('[Kelurahan] Administrator dapat menambahkan Kelurahan', async function() {
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

    // search data
    let search = await driver.findElement(By.name('search'));

    // expect button insert
    let button_insert = await driver.wait(until.elementLocated(By.css("button[class='btn bg-green-600 text-white w-left']")));
    expect(button_insert).to.exist;
    await button_insert.click();
    await driver.sleep(5000);
    // expect modal create
    await driver.wait(until.elementLocated(By.id('modal-create')));

    let title_detail = await driver.wait(until.elementLocated(By.xpath('//*[@id="modal-create"]/div/div/div[1]/h2'))).getText();
    expect(title_detail).to.equal('Tambah Kelurahan');

    // verify input label
    let label_id = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[1]/div/label")).getText();
    expect(label_id).to.contains('Id');
    let label_kecamatan = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[2]/div/label")).getText();
    expect(label_kecamatan).to.contains('Kecamatan');
    let label_kelurahan = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[3]/div/label")).getText();
    expect(label_kelurahan).to.contains('Kelurahan');

    // verify form input
    let input_id = await driver.findElement(By.xpath("//input[@name='id']"));
    expect(input_id).to.exist;
    let input_kecamatan = await driver.findElement(By.xpath("//*[@id='tomselect-1-tomselected']"));
    expect(input_kecamatan).to.exist;
    let div_kecamatan = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[2]/div/div/div/div[1]"));
    expect(div_kecamatan).to.exist;
    
    let input_kelurahan = await driver.findElement(By.name("kelurahan"));
    expect(input_kelurahan).to.exist;


    // update data
    await input_id.clear();
    await input_id.sendKeys("123456747");
    await div_kecamatan.click();
    await input_kecamatan.sendKeys('BADAR', Key.RETURN);
    await input_kelurahan.clear();
    await input_kelurahan.sendKeys("Kamonola-1");

    let save_btn = await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div[3]/button[2]"));
    expect(save_btn).to.exist;
    
    await save_btn.click();
    await driver.sleep(3000);
    await driver.wait(until.elementLocated(By.xpath("//p[contains(text(), 'Data berhasil disimpan')]")));
    await driver.sleep(3000);

    // // validate if the data changed 
    // // search data
    await search.clear();
    await search.sendKeys('Kamonola-1', Key.ENTER);
    await driver.sleep(3000);
    let data_after = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[4]"));
    expect(data_after).to.exist;
    let keyword_2 = await data_after.getText();
    expect(keyword_2).to.equal("Kamonola-1");
  })
})
