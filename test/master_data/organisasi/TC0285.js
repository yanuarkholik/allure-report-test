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
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[15]/div/input')).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec aliquam elit. Quisque eget congue elit. Quisque euismod feugiat purus eget venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eu neque viverra, placerat erat a, mollis quam. Mauris ultrices rhoncus tortor non consequat. Suspendisse ac rutrum tellus. Nullam quam nisl, vestibulum id pulvinar sit amet, ornare nec enim. Vestibulum vulputate sit amet diam ac vestibulum. Maecenas id velit quis magna scelerisque laoreet. Vivamus non ante orci. Nulla ornare ornare ex, et placerat urna hendrerit sit amet. Phasellus id semper elit, eget auctor nulla. Duis neque sem, malesuada ut vulputate in, ultrices non est. Aliquam et auctor enim, et eleifend ex. Sed ipsum nunc, fermentum vitae orci vel, commodo luctus nisi.Vivamus cursus ornare nisl ac consectetur. Aenean posuere ipsum a gravida commodo. Phasellus scelerisque suscipit mollis. Suspendisse luctus nec tortor at imperdiet. Nulla tempus ut diam et molestie. Vestibulum facilisis eros ante, nec sollicitudin orci malesuada eget. Sed sollicitudin felis eu risus finibus molestie. Quisque id est fringilla, pretium felis eu, pulvinar felis. Quisque luctus sem eget convallis porttitor. Duis dapibus, lacus non fringilla sagittis, tortor elit ornare leo, eu hendrerit justo purus a eros. Vivamus a enim dignissim, semper tortor eu, vehicula velit. Sed eu laoreet lacus. Ut pharetra, ex sed vulputate varius, ante lacus gravida odio, in suscipit lacus risus at eros.");
    await driver.sleep(1000);
    //Kolom Alamat
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[17]/div/textarea')).clear();
    await driver.findElement(By.xpath('//*[@id="modal-edit-body"]/form/div/div[17]/div/textarea')).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec aliquam elit. Quisque eget congue elit. Quisque euismod feugiat purus eget venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eu neque viverra, placerat erat a, mollis quam. Mauris ultrices rhoncus tortor non consequat. Suspendisse ac rutrum tellus. Nullam quam nisl, vestibulum id pulvinar sit amet, ornare nec enim. Vestibulum vulputate sit amet diam ac vestibulum. Maecenas id velit quis magna scelerisque laoreet. Vivamus non ante orci. Nulla ornare ornare ex, et placerat urna hendrerit sit amet. Phasellus id semper elit, eget auctor nulla. Duis neque sem, malesuada ut vulputate in, ultrices non est. Aliquam et auctor enim, et eleifend ex. Sed ipsum nunc, fermentum vitae orci vel, commodo luctus nisi.Vivamus cursus ornare nisl ac consectetur. Aenean posuere ipsum a gravida commodo. Phasellus scelerisque suscipit mollis. Suspendisse luctus nec tortor at imperdiet. Nulla tempus ut diam et molestie. Vestibulum facilisis eros ante, nec sollicitudin orci malesuada eget. Sed sollicitudin felis eu risus finibus molestie. Quisque id est fringilla, pretium felis eu, pulvinar felis. Quisque luctus sem eget convallis porttitor. Duis dapibus, lacus non fringilla sagittis, tortor elit ornare leo, eu hendrerit justo purus a eros. Vivamus a enim dignissim, semper tortor eu, vehicula velit. Sed eu laoreet lacus. Ut pharetra, ex sed vulputate varius, ante lacus gravida odio, in suscipit lacus risus at eros.");
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

