const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');

describe ('SIMPATIK', function() {
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  });
  after(async function() {
    await driver.sleep(3000);
  });
  it('NEGARA', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("username")).sendKeys("doni007");
    await driver.findElement(By.id("password")).sendKeys("secret");
    await driver.findElement(By.className("btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 h-12")).click();
    await driver.sleep(3000);   
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Pilih Menu Master Data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(3000);
    //Pilih Sub Menu Pangkat Ruang
    await driver.findElement(By.xpath("/html/body/nav/ul[1]/li[4]/ul/li[26]")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Pangkat Ruang')
    await driver.sleep(3000);
    //Tambah Pangkat Ruang
    await driver.findElement(By.className("btn bg-green-600 text-white w-left")).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="modal-create-body"]/form/div/div[1]/div/input')).sendKeys('D');
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="modal-create-body"]/form/div/div[2]/div/input')).sendKeys('4');
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="modal-create-body"]/form/div/div[3]/div/input')).sendKeys('12');
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="modal-create-body"]/form/div/div[4]/div/input')).sendKeys('Pembina Utama Madyaaaa');
    await driver.sleep(1000);
    await driver.findElement(By.className('btn btn-primary md:w-auto w-[48%]')).click();
    await driver.sleep(1000);
    //Alert Berhasil Tambah Pangkat Ruang
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil disimpan')]"));
  });
});