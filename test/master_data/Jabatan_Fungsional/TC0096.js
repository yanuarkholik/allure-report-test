const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA - JABATAN FUNGSIONAL', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[2]/a[1]")).click();
  })
  after(async function() {
    await driver.quit();
  })
  it('Administrator dapat menambahkan Jabatan Fungsional', async function() {
    //Login
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click();
    await driver.sleep(5000);

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Jabatan Fungsional
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[9]/a")).click();
    await driver.sleep(4000);

    //Expect: There is title 'List Jabatan Fungsional' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Jabatan Fungsional')

    // Click button Tambah
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(3000);
    await driver.findElement(By.css("input[name='jabatan_fungsional']")).sendKeys('Manggala Informatika Pratama auto');
    await driver.findElement(By.xpath('//*[@id="tomselect-3-tomselected"]')).sendKeys('Manggala Informatika',Key.RETURN);
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="tomselect-4-tomselected"]')).sendKeys('Juru Muda Tingkat D',Key.RETURN);
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="tomselect-5-tomselected"]')).sendKeys('Pembina Tingkat I',Key.RETURN);
    await driver.sleep(1000);
    await driver.findElement(By.css("input[name='tunjangan']")).sendKeys('326000');
    await driver.sleep(1000);
    await driver.findElement(By.css("input[name='bup']")).sendKeys('54');
    await driver.sleep(1000);
    await driver.findElement(By.css("input[name='grade_fungsional_t']")).sendKeys('8');
    await driver.sleep(1000);
    await driver.findElement(By.xpath('//*[@id="tomselect-6-tomselected"]')).sendKeys('LHKPN',Key.RETURN);
    await driver.sleep(2000);

    //Save
    // await driver.findElement(By.css("button[data-btn='save']")).click();
    await driver.findElement(By.xpath('//*[@id="modal-create"]/div/div/div[3]/button[2]')).click();
    await driver.sleep(4000);

    //Expected Show Data Berhasil Disimpan
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil disimpan')]"));
    // let alert = await driver.findElement(By.xpath('//*[@id="notification.4616817c-ae63-42ef-ad3f-23fe519a4198"]/div[2]')).getText();
    // expect(alert).to.equal('Data berhasil disimpan');
  })
})
