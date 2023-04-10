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
  it('Administrator tidak dapat tambah Periode SOTK dengan inputan yang sama dengan data Periode SOTK yang telah ada sebelumnya', async function() {
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
    await driver.findElement(By.css('input[name="nomor_permen"]')).sendKeys('19/PER/M.KOMINFO/09/2017');
    await driver.sleep(1000);
    //Isi field Tanggal
    await driver.findElement(By.css('input[name="tanggal"]')).sendKeys('30-12-2022');
    await driver.sleep(1000);
    //Upload Arsip
    //Klik save
    await driver.findElement(By.css('[data-btn="save"]')).click();
    await driver.sleep(1000);
    //expected result Terdapat warning apabila inputan yang sama dengan data Periode SOTK yang telah ada sebelumnya
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'input nomor permen yang anda entrikan sudah ada')]")),5000);
  })
})