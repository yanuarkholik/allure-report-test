const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KELURAHAN', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    // await driver.manage().window().setRect({ width: 1680, height: 956 });
  })
  after(async function() {
    await driver.quit();
  })
  it('[Kelurahan] Administrator tidak dapat tambah Kelurahan dengan inputan lebih dari 255 karakter ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.wait(until.elementLocated(By.css('h1[class="font-bold text-lg my-4"]'))).getText();
    expect(dashboard).to.equal('Dashboard');

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kelurahan
    await driver.findElement(By.linkText("Kelurahan")).click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[21]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kelurahan' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kelurahan')

    // search data
    let search = await driver.findElement(By.name('search'));

    // expect button insert
    let button_insert = await driver.wait(until.elementLocated(By.css("button[class='btn bg-green-600 text-white w-left']")));
    expect(button_insert).to.exist;
    await button_insert.click();
    await driver.sleep(5000);
    // expect modal create
    await driver.wait(until.elementLocated(By.id('modal-create')));

    let title_detail = await driver.wait(until.elementLocated(By.xpath('//*[@id="modal-create"]/div/div/div[1]/h2'))).getText();
    expect(title_detail).to.equal('Tambah Kelurahan');

    // verify input label
    let label_id = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[1]/div/label")).getText();
    expect(label_id).to.contains('Id');
    let label_kecamatan = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[2]/div/label")).getText();
    expect(label_kecamatan).to.contains('Kecamatan');
    let label_kelurahan = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div[3]/div/label")).getText();
    expect(label_kelurahan).to.contains('Kelurahan');

    // verify form input
    let input_id = await driver.findElement(By.xpath("//input[@name='id']"));
    expect(input_id).to.exist;
    let input_kecamatan = await driver.findElement(By.xpath("//*[@id='tomselect-1-tomselected']"));
    expect(input_kecamatan).to.exist;
    let div_kecamatan = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[2]/div/div/div/div[1]"));
    expect(div_kecamatan).to.exist;
    
    let input_kelurahan = await driver.findElement(By.name("kelurahan"));
    expect(input_kelurahan).to.exist;


    // update data
    await input_id.clear();
    await input_id.sendKeys("[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046");
    await div_kecamatan.click();
    await input_kecamatan.sendKeys('BADAR', Key.RETURN);
    await input_kelurahan.clear();
    await input_kelurahan.sendKeys("[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046[2596:22668:0403/141627.147:ERROR:device_event_log_impl.cc(222)] [14:16:27.146] USB: usb_device_handle_win.cc:1046");

    let save_btn = await driver.findElement(By.xpath("//*[@id='modal-create']/div/div/div[3]/button[2]"));
    expect(save_btn).to.exist;
    
    await save_btn.click();
    await driver.sleep(3000);

    // text validation for id and kelurahan
    let id_validation = await driver.wait(until.elementLocated(By.css("div.mb-4:nth-child(1) > div:nth-child(1) > div:nth-child(3)")));
    expect(id_validation).to.exist;
    let kelurahan_validation = await driver.wait(until.elementLocated(By.css("div.mb-4:nth-child(3) > div:nth-child(1) > div:nth-child(3)")));
    expect(kelurahan_validation).to.exist;

    let mandatory_id_txt = await id_validation.getText();
    expect(mandatory_id_txt).to.contains('Id maksimal berisi 255 karakter.');
    let mandatory_kelurahan_txt = await kelurahan_validation.getText();
    expect(mandatory_kelurahan_txt).to.contains('Kelurahan maksimal berisi 200 karakter.');

    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Ada Kesalahan Input')]")));
    await driver.wait(until.elementsLocated(By.xpath("//p[contains(text(), 'Cek kembali isian Anda!')]")));

  })
})
