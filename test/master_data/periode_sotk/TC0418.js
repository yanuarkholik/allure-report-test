const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('simpatik', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.quit();
  })
  it('Administrator dapat melakukan perubahan pada data Periode SOTK', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id");
    await driver.manage().window().maximize();
    await driver.manage().window();
    // login
    await driver.findElement(By.id("username")).sendKeys('doni007');
    await driver.findElement(By.id("password")).sendKeys('secret');
    await driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/form/div[3]/button')).click();
    await driver.sleep(3000);
    // klik menu Master data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    // klik menu STOK
    await driver.findElement(By.xpath("/html/body/nav/ul[1]/li[4]/ul/li[36]/a")).click();
    await driver.sleep(1000);
    //Klik edit STOK
    await driver.findElement(By.css('svg[class="lucide w-4 h-4 text-primary dark:text-blue-400 !stroke-2.5"]')).click();
    await driver.sleep(1000);
    //Clear field
    await driver.findElement(By.css('input[name="nomor_permen"]')).clear();
    await driver.findElement(By.css('input[name="tanggal"]')).clear();
    await driver.sleep(1000);
    //Isi field nomor permen
    await driver.findElement(By.css('input[name="nomor_permen"]')).sendKeys('72/PER/M.KOMINFO/03/2019');
    await driver.sleep(1000);
    //Isi field Tanggal
    await driver.findElement(By.css('input[name="tanggal"]')).sendKeys('01-11-2019');
    await driver.sleep(1000);
    //Klik save
    await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[3]/button[2]')).click();
    await driver.sleep(1000);
    //Muncul notifikasi data berhasil diperbarui
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Data berhasil diperbarui')]")),5000);
  })
})