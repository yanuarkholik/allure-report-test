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
  it('Login', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/documentcategory");
    await driver.sleep(5000);
    await driver.findElement(By.css("#kt_content > div > div > app-documentcategory > div > div.card-body > div.form.form-label-right > div > div.col-lg-9.col-xl-8.mt-5.mt-lg-0.ng-untouched.ng-pristine.ng-valid > div > div:nth-child(3) > div > input")).sendKeys('iom');
  })
})
