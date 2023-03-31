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
    await driver.sleep(3000);   
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
    //Tambah Kota
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div/form/div/div/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.id("tomselect-1-opt-4")).click();
    await driver.sleep(1000);
    await driver.findElement(By.name("kota")).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex turpis, suscipit sed rutrum quis, pretium id sapien. Aenean facilisis tempus faucibus. Suspendisse iaculis erat aliquam, sagittis lorem non, rutrum ex. Etiam commodo metus arcu, nec aliquet erat aliquam eget. Nullam et ex eget mauris auctor tristique sit amet vel felis. Nullam pharetra tellus ante. Duis congue quam ac interdum hendrerit. Nullam tincidunt pretium malesuada. Integer tincidunt, velit vitae posuere maximus, justo lectus lacinia velit, nec lobortis mauris elit id mauris. Aenean nibh libero, imperdiet id sodales quis, vestibulum at diam.", Key.RETURN);
    await driver.sleep(1000);
    await driver.findElement(By.className("btn btn-primary md:w-auto w-[48%]")).click();
    await driver.sleep(3000);
    //Alert tambah kota
    await driver.findElements(By.xpath("p[contains(text(), 'Ada Kesalahan Input')]"));
    await driver.sleep(1000);
    //Mandatory
    let mandatory_Kota = await driver.findElement(By.xpath('//*[@id="modal-create-body"]/form/div/div[1]/div/div[1]')).getText();
    expect(mandatory_Kota).to.equal('Kota maksimal berisi 200 karakter.');

  });
});