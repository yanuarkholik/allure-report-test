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
  
  it('Dapat melakukan pencarian Eselon berdasarkan kata yang sesuai', async function() {
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


    // Search
    await driver.findElement(By.css("input[placeholder='Cari Eselon']")).sendKeys('II.AZDHADHAHSJAHs');
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@class='box']/form/div/div[2]/button")).click()
    await driver.sleep(3000);
        
    let diklat = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td")).getText();
    expect(diklat).to.equal('Tidak ada data');
  })
})
