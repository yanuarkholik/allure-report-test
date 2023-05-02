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
  
  it('Lihat detail Data Eselon', async function() {
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
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[6]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Eselon' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Eselon')


    // Click button detail
    await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[7]/div[1]/button[1]")).click()
    await driver.sleep(2000);
    
    let title = await driver.findElement(By.css("h3[class='font-bold text-base leading-6']")).getText();
    expect(title).to.equal('Detail Eselon');

    await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[1]/dt[contains(text(), 'ID')]"));
    await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[2]/dt[contains(text(), 'Eselon')]"));
    await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[3]/dt[contains(text(), 'Tunjangan')]"));
    await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[4]/dt[contains(text(), 'Pangkat Min')]"));
    await driver.findElements(By.xpath("//*[@class='border-t border-b border-gray-200']/div/dl/div[5]/dt[contains(text(), 'Pangkat Max')]"));

  })
})
