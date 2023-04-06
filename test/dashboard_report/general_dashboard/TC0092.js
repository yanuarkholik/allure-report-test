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
  it('General Dashboard	- List General Dashboard', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/reporting");
    await driver.sleep(5000);
    let validasi = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-dashboard-reporting/div[2]/div/div/div[2]/div/table/tbody/tr[1]/td[5]')).getText();
    expect(validasi).to.contains("Tramf/Learning_Development/102022/044");
  })
})
