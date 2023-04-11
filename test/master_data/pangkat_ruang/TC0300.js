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
    //Klik Kolom ID 2x
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[2]")).click();
    //Validasi Ascending Berdasarkan ID
    let ascID = await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[1]/td[2]")).getText();
    expect(ascID).to.equal('12');
    //Klik Kolom Teks 2x
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[3]")).click();
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[3]")).click();
    //Validasi Descending Berdasarkan Teks
    let ascTeks = await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[1]/td[3]")).click();
    expect(ascTeks).to.equal('D');
    //Klik Kolom Golongan 2x
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[4]")).click();
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[4]")).click();
    //Validasi Descending Berdasarkan Golongan
    let ascGolongan = await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[1]/td[4]")).click();
    expect(ascGolongan).to.equal('D');
    //Klik Kolom ID Ruang 2x
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[5]")).click();
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[5]")).click();
    //Validasi Descending Berdasarkan ID Ruang
    let ascIDRuang = await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[5]")).click();
    expect(ascIDRuang).to.equal('0');
    //Klik Kolom Pangkat 2x
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[6]")).click();
    await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[6]")).click();
    //Validasi Descending Berdasarkan ID Ruang
    let ascPangkat = await driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[6]")).click();
    expect(ascPangkat).to.equal("ABC - II/D");
  });
});