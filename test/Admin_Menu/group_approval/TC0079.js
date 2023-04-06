const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user2;
    let pswd = process.env.pswd2;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Able to access Group Approval page', async function() {

    /* Able to access Group Approval page
      * Login as Admin
      * Select the Admin Menu
      * Select the sub menu Group Approval
      * Displays Group Approval page
      * Click delete icon
      * Click the delete button
      * */

    //Group Approval
    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");
    await driver.sleep(7000);
    //Assertion
    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'Group Approval')]")));
  })
})
