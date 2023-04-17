const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login');

describe('XL Single Approval - Admin Menu - Master Document', function() {
 
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
  it('TC0035 - Create Document Category [Text Area]', async function() {
    
    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);

    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Create')]")));
    await ele.click();

    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Document Field')]")));
    await driver.findElement(By.name("name")).sendKeys('Issue Field Other Radio Button & Checkbox');
    await driver.findElement(By.name("subCategory")).sendKeys('New Update 08-04-2023');
    await driver.findElement(By.xpath('//textarea[@formcontrolname="guidelines"]')).sendKeys('Issue Field Other Radio Button & Checkbox Guidelines');
    await driver.findElement(By.xpath('//div/select[@formcontrolname="templateType"]')).click()

    var type = 'Custom';
    await driver.findElement(By.xpath(`//select[@formcontrolname='templateType']//option[contains(text(), '${type}')]`)).click();

    await driver.findElement(By.xpath('//select[@formcontrolname="documentType"]')).click();
    var type2 = 'Homepass';
    await driver.findElement(By.xpath(`//select[@formcontrolname='documentType']//option[contains(text(), '${type2}')]`)).click();

    await driver.findElement(By.name('fieldName')).sendKeys('Test Field Label');
    await driver.findElement(By.xpath("//i[contains(@class, 'flaticon2-down')]")).click();
    await driver.findElement(By.xpath('//div/select[@formcontrolname="fieldType"]')).click();
    await driver.findElement(By.xpath("//option[contains(@value, 'textarea')]")).click();
    await driver.findElement(By.name('fieldDescription')).sendKeys('Test Field Description');
    
    await driver.findElement(By.xpath("//div[contains(text(), 'Next')]")).click();
    var ele = driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Create Template')]")));
    await ele.click();

    await driver.wait(until.elementLocated(By.xpath("//h2[contains(text(), 'Success')]")));
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
