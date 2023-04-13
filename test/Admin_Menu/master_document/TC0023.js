const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await loginModule.tanggal();
    await driver.quit();
  })
  it('Able to edit Document Category', async function() {
    
    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);

    var ele = driver.wait(until.elementLocated(By.xpath("//tr[2]//a[@title='Edit']")));
    await ele.click();

    var ele =  driver.wait(until.elementLocated(By.name("name")));
    await ele.clear();
    await ele.sendKeys('Issue Field Other Radio Button & Checkbox');
    var ele =  driver.findElement(By.name("subCategory"));
    await ele.clear();
    await ele.sendKeys('New Update 08-04-2023');
    var ele =  driver.findElement(By.xpath('//textarea[@formcontrolname="guidelines"]'));
    await ele.clear();
    await ele.sendKeys('Issue Field Other Radio Button & Checkbox Guidelines');

    var ele =  driver.findElement(By.xpath('//select[@formcontrolname="templateType"]'));
    await ele.click()
    var type = 'Standard';
    await driver.findElement(By.xpath(`//select[@formcontrolname='templateType']//option[contains(text(), '${type}')]`)).click();

    var ele =  driver.findElement(By.xpath('//select[@formcontrolname="documentType"]'));
    await ele.click()
    var type2 = 'Homepass';
    await driver.findElement(By.xpath(`//select[@formcontrolname='documentType']//option[contains(text(), '${type2}')]`)).click();

    await driver.findElement(By.xpath("//div[contains(text(), 'Next')]")).click();
    var ele = driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Create Template')]")));
    await ele.click();

    // await driver.wait(until.elementLocated(By.xpath("//h2[contains(text(), 'Success')]")));
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
