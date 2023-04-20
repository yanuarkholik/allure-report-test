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
    //Pilih Sub Menu Organisasi
    await driver.findElement(By.xpath("/html/body/nav/ul[1]/li[4]/ul/li[25]")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Organisasi')
    await driver.sleep(3000);
    //Ubah Organisasi
    await driver.findElement(By.xpath("//html/body/div[5]/div/div[2]/div[4]/div/div/table/tbody/tr[1]/td[8]/div/button[2]")).click();
    await driver.sleep(1000);
    //Kolom Nama
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[15]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[15]/div/input')).sendKeys("Organisasi Pemuda Kominfo");
    await driver.sleep(1000);
    //Kolom Alamat
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[17]/div/textarea')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[17]/div/textarea')).sendKeys("Jalan Pemuda, Nomor 1928.");
    await driver.sleep(1000);
    //Kolom Telepon
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[2]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[2]/div/input')).sendKeys("159");
    await driver.sleep(1000);
    //Kolom Fax
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[4]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[4]/div/input')).sendKeys("159");
    await driver.sleep(1000);
    //Kolom Email
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[6]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[6]/div/input')).sendKeys("dummy@hotmail.com");
    await driver.sleep(1000);
    //Kolom Kode Pos
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[8]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[8]/div/input')).sendKeys("15059");
    await driver.sleep(1000);
    //Kolom Provinsi
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[10]/div/div/div/div[1]/div[1]')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[10]/div/div/div/div[1]/div[1]')).sendKeys("Jawa Barat");
    await driver.sleep(1000);
    await driver.findElement(By.className('option active')).click();
    await driver.sleep(1000);
    //Kolom Kota
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).sendKeys("Kota Banjar");
    await driver.sleep(1000);
    await driver.findElement(By.className('option active')).click();
    await driver.sleep(1000);
    //Kolom Kecamatan
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).sendKeys("Purwaharja");
    await driver.sleep(1000);
    await driver.findElement(By.className('option active')).click();
    await driver.sleep(1000);
    //Kolom Kelurahan
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[12]/div/div/div/div[1]/div[1]')).sendKeys("Mekarharja");
    await driver.sleep(1000);
    await driver.findElement(By.className('option active')).click();
    await driver.sleep(1000);
    //Kolom ID Bkn
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[18]/div/input')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[18]/div/input')).sendKeys("232134");
    await driver.sleep(1000);
    //Klik Simpan
    await driver.findElement(By.className("btn btn-primary md:w-auto w-[48%]")).click();
    //Alert Berhasil Ubah Organisasi
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil diperbarui')]"));
  });
});

