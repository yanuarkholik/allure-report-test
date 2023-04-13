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
  it('Able to delete Document Category', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);

    var ele = driver.wait(until.elementLocated(By.xpath("//tr[1]//a[@title='Delete']")));
    await ele.click();

    await driver.wait(until.elementLocated(By.xpath("//div[contains(@class, 'modal-title')]")));
    await driver.findElement(By.xpath("//button[contains(text(), 'Delete')]")).click();
    
    await driver.wait(until.elementLocated(By.xpath("//h2[contains(text(), 'Success')]")));
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
