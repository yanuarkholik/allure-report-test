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
    await driver.sleep(5000);
    await driver.quit();
  })
  it('List Document Category', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-documentcategory/div/div[1]/div[1]/h3')).getText(); 
    expect(namaDashboard).to.contains("Document Category");
  })
})
