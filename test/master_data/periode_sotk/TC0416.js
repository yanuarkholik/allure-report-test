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
  it('Administrator dapat menambahkan Periode SOTK', async function() {
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
    //Klik tambah periode STOK
    await driver.findElement(By.css('button[class="btn bg-green-600 text-white w-left"]')).click();
    await driver.sleep(1000);
    //Isi field Nomor Permen
    await driver.findElement(By.css('input[name="nomor_permen"]')).sendKeys('71/PER/M.KOMINFO/03/2019');
    await driver.sleep(1000);
    //Isi field Tanggal
    await driver.findElement(By.css('input[name="tanggal"]')).sendKeys('01-11-2019');
    await driver.sleep(1000);
    //Upload Arsip
    //Klik save
    await driver.findElement(By.css('[data-btn="save"]')).click();
    await driver.sleep(1000);
    //expected result Terdapat pop up nofitication berhasil menambahkan periode STOK
    // await driver.findElement(By.xpath("p[contains(text(), 'sudah ada')]"));
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Data berhasil disimpan')]")),5000);
  })
})
