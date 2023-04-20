const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var path = require('path');
var expect = require('chai').expect;

const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user1;
    let pswd = process.env.pswd1;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('My Signature', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/my-signature");
    await driver.sleep(7000);
    
    await driver.wait(until.elementLocated(By.xpath("//h3[contains(text(), 'My Signature')]")));
    await driver.findElement(By.xpath("//button[contains(text(), ' Upload Signature ')]")).click();

    await driver.wait(until.elementLocated(By.xpath("//div[contains(text(), 'Upload Signature') and @id='example-modal-sizes-title-lg']")));
    var upload = path.resolve('./data/signature/signature.png');
    await driver.findElement(By.xpath("//div[contains(text(), 'Browse')]/input")).sendKeys(upload);

    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Submit')]")));
    await ele.click();

    var ele = driver.wait(until.elementLocated(By.xpath("//h2[@id='swal2-title']")));
    var text = await ele.getText();
    expect(text).to.equal('Success');
    await driver.findElement(By.xpath("//button[contains(text(), 'OK')]")).click();
  })
})
