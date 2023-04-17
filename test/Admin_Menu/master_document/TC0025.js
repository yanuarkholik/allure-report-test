const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../Login/Login');

describe('XL Single Approval - Admin Menu - Master Document', function() {
 
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
  it('TC0025 - Able to duplicate the Document Category', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);

    var search = 'Test approval matrix';
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${search}')]/following-sibling::td//a[@title='Duplicate']`)));
    await ele.click();

    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Duplicate')]")));
    await ele.click();

  })
})
