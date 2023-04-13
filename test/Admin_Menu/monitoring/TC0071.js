const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../');

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
  it('Show List Monitoring', async function() {

    //Role Management
    await driver.get("https://approval-fe.dev.alurkerja.com/monitoring");
    await driver.sleep(7000);

    const type = ['role', 'signature', 'masterdocument'];
    for (let i = 0; i < type.length; i++) {
      var ele = driver.wait(until.elementLocated(By.name('status')));
      await ele.click();
      let listEle = driver.wait(until.elementLocated(By.xpath(`//select[@name='status']/option[@value='${type[i]}']`)));
      listEle.click();

    }
  })
})
