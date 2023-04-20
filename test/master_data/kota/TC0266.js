const { Builder, By, Key, until } = require('selenium-webdriver');
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
  it('KOTA', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("username")).sendKeys("doni007");
    await driver.findElement(By.id("password")).sendKeys("secret");
    await driver.findElement(By.className("btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 h-12")).click();
    await driver.sleep(5000);   
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Pilih Menu Master Data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(3000);
    //Pilih Sub Menu Kota
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[23]/a")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kota')
    await driver.sleep(3000);
    //Klik 2x Kolom Kota
    var doubleClick = driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[4]'));
    var actions = driver.actions({bridge: true});
    actions.doubleClick(doubleClick).perform();
    await driver.sleep(5000);
    //Konfirmasi Descending
    let desc = await driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[1]/td[4]')).getText();
    expect(desc).to.equal('KOTA YOGYAKARTA');
  });
});