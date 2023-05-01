const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA ESELON', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Edit Data Eselon', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(2000);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    await driver.get("https://simpatik-fe.merapi.javan.id/master/eselon");

    //Expect: There is title 'List Eselon' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Eselon')

    // Click button edit
    await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[7]/div[1]/button[2]")).click()
    await driver.sleep(2000);
    
    //Make changes as needed
    await driver.findElement(By.css("input[name='eselon']")).clear();
    await driver.findElement(By.css("input[name='tunjangan']")).clear();
    await driver.sleep(2000);
    await driver.findElement(By.css("input[name='eselon']")).sendKeys('A1');
    await driver.findElement(By.css("input[name='tunjangan']")).sendKeys('2000');
    await driver.sleep(1000);
    
    //Dropdown Pangkat Minimal
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[3]/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[3]/div/div/div/div[1]/input")).sendKeys("iii/c");
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[3]/div/div/div/div[2]")).click();
    await driver.sleep(1000);
    
    //Dropdown Pangkat Max
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[4]/div/div")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[4]/div/div/div/div[1]/input")).sendKeys("iii/a");
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div/form/div/div[4]/div/div/div/div[2]")).click();    await driver.sleep(2500);
  
    //Klik Simpan
    await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[3]/button[2]')).click()
    await driver.sleep(1500);
    await driver.findElements(By.xpath("p[contains(text(), 'Data berhasil diperbarui')]"));

  })
})
