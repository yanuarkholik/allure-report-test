const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.Admin2_Cloud_EMAIL;
    let pswd = process.env.Admin2_Cloud_PASSWORD;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('List Homepass Dashboard', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/homepass");
    await driver.sleep(5000);
    let ReqidTampil = await driver.findElement(By.css("#kt_content > div > div > app-dashboard-reporting > div:nth-child(1) > div > div > div.card-header > div.card-title > h3")).getText();
    expect(ReqidTampil).to.contains("Your Approval History");
  })
})

