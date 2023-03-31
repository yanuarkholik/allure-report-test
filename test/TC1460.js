const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KEDUDUKAN PEGAWAI', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.manage().window().setRect({ width: 1680, height: 956 });
  })
  after(async function() {
    await driver.quit();
  })
  it('List Data Kedudukan Pegawai', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(1500);   
    
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

    // html.theme-2 body.py-5.md:py-0 div.side-nav-behind.ml-0.md:ml-[105px].xl:ml-[260px].flex.overflow-hidden.mt-10.md:mt-0 div.content div div.box form.ui.form.p-4 div.flex.sm:flex-row.items-center div.sm:w-auto.flex.mr-2 button.btn.btn-primary.shadow-md span.hidden.sm:inline.ml-2

    // /html/body/div[5]/div/div[2]/div[3]/form
    await driver.findElement(By.xpath("//*[@class='box']/div/div[2]/div[3]/form"));
    await driver.findElement(By.css('input[wire:submit prevent="search"]'));

    // let search_button = await driver.findElement(By.css("span[class='hidden sm:inline ml-2']")).getText();
    // expect(search_button).to.equal('Cari');

    // await driver.findElement(By.css("button[type='submit'][contains(text(), 'Cari')]"));

    // // Click button detail
    // await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[5]/div[1]/button[1]")).click()
    // await driver.sleep(2000);
    
    // let title = await driver.findElement(By.css("h3[class='font-bold text-base leading-6']")).getText();
    // expect(title).to.equal('Detail Diklat');

    // await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[1]/dt[contains(text(), 'ID')]"));
    // await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[2]/dt[contains(text(), 'Jenis Diklat')]"));
    // await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[3]/dt[contains(text(), 'Diklat')]"));
    // await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[4]/dt[contains(text(), 'Deskripsi')]"));

  })
})
