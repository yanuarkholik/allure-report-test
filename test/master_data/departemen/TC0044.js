const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA DEPARTEMEN', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
  })
  after(async function() {
    await driver.quit();
  })
  it('Dapat mengurutkan data sub menu Departemen secara descending', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    
    // halaman list data Departemen
    await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
    await driver.findElement(By.linkText("Master Data")).click();
    var ele = driver.wait(until.elementLocated(By.linkText("Departemen")));
    await ele.click();

    // mengurutkan data Departemen secara descending
    const sortList = ['id', 'kode', 'nama', 'is_active'];
    for (let i = 0; i < sortList.length; i++) {
        let list = sortList[i];
        let listElem = driver.wait(until.elementLocated(By.xpath(`//th[@*="sortBy('${list}')"]`)));

        listElem.click();

        // tunggu hingga table terurut descending
        while (await driver.wait(until.elementLocated(By.xpath(`//table//tr[1]/td[${i+1}]`))) == true) {
            let prev = await driver.findElement(By.xpath(`//table//tr[${i+1}]/td[${i+2}]`)).getText();
            let curr = await driver.findElement(By.xpath(`//table//tr[${i+2}]/td[${i+2}]`)).getText();
            if (prev < curr) {
                return false;
            } 
            else{
                return true;
            }
        }
        await driver.sleep(3000);
    }
  })
})