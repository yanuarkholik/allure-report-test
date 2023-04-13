const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user2;
    let pswd = process.env.pswd2;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await loginModule.tanggal();
    await driver.quit();
  })
  it('Search Document Category', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);

    var search = 'Issue Field Other Radio Button & Checkbox';
    var ele = driver.wait(until.elementLocated(By.xpath('//input[@formcontrolname="name"]')));
    await ele.sendKeys(search.toLowerCase());
    await driver.wait(until.elementLocated(By.xpath(`//tr/td[contains(text(), '${search}')][1]`)));
    await driver.sleep(1000);
    await ele.clear();

    await ele.sendKeys(search.toUpperCase());
    await driver.wait(until.elementLocated(By.xpath(`//tr/td[contains(text(), '${search}')][1]`)));
    await driver.sleep(1000);
    await ele.clear();
    
    await ele.sendKeys(search);
    await driver.wait(until.elementLocated(By.xpath(`//tr/td[contains(text(), '${search}')][1]`)));
    await driver.sleep(1000);
    await ele.clear();
    
  })
})
