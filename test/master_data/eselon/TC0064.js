const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')
const loginModule = require('../../login/login.js');

describe('MASTER DATA ESELON', function() {
 
  before(async function() {
    let user = process.env.adm_pusat;
    let pswd = process.env.pass;
    await loginModule.login(user,pswd);
  })

  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  
  it('Tidak dapat tambah Eselon dengan inputan pada field Eselon lebih dari 5 karakter', async function() {
    await driver.sleep(3000);

    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard');

    await driver.sleep(3000);

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(3000);
    
    //Select Menu Eselon
    // var ele = driver.wait(until.elementLocated(By.linkText("Eselon")));
    // await ele.click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[6]/a")).click();
    // await driver.sleep(2000);

    await driver.get("https://simpatik-fe.merapi.javan.id/master/eselon");
    await driver.sleep(3000);


    //Expect: There is title 'List Eselon' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Eselon')


    // Click button Tambah
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(3000);
    
    await driver.sleep(2000);
    await driver.findElement(By.css("input[name='eselon']")).sendKeys('AAAAAAAAAAAAAAAAAAAAAAA');
    await driver.findElement(By.css("input[name='tunjangan']")).sendKeys('5000000000000000000000000000000');
    await driver.sleep(1000);

    await driver.findElement(By.css("button[data-btn='save']")).click()
    await driver.sleep(2000);

    await driver.findElements(By.xpath("p[contains(text(), 'Ada Kesalahan Input')]"));
    
    let alert_eselon = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[1]/div/div[1]")).getText();
    expect(alert_eselon).to.equal('Eselon maksimal berisi 5 karakter.');

    let alert_tunjangan = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[2]/div/div[1]")).getText();
    expect(alert_tunjangan).to.equal('Tunjangan harus berupa bilangan bulat.');

    let alert_min = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[3]/div/div[2]")).getText();
    expect(alert_min).to.equal('Pangkat Min wajib diisi.');

    let alert_max = await driver.findElement(By.xpath("//*[@id='modal-create-body']/form/div/div[4]/div/div[2]")).getText();
    expect(alert_max).to.equal('Pangkat Max wajib diisi.');
  })
})
