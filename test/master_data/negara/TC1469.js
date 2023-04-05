const { Builder, By, Key, until } = require('selenium-webdriver');
const { findSafariDriver } = require('selenium-webdriver/safari');
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
    //Pilih Sub Menu Negara
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[24]/a")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Negara')
    await driver.sleep(3000);
    //Lihat Detail Negata
    await driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[3]/td[4]/div/button[1]')).click();
    await driver.sleep(3000);
    await driver.findElement(By.className("btn btn-primary dark:bg-slate-800 w-full sm:w-auto")).click();
    await driver.sleep(3000);
    await driver.findElement(By.className("form-control ")).clear();
    await driver.sleep(3000);
    await driver.findElement(By.className("form-control ")).sendKeys("Afrika Tengah");
    await driver.sleep(3000);
    await driver.findElement(By.className("btn btn-primary md:w-auto w-[48%]")).click();
    await driver.sleep(3000);
    //Alert Berhasil
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil disimpan')]"));
  });
});