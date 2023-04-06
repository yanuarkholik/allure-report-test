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
  it('My Signature', async function() {

    await driver.get("https://approval-fe.dev.alurkerja.com/my-signature");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-my-signature/div/div[2]/div/div[3]/div[2]/div/button')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-upload-my-signature-modal/div/div[2]/div/div/div[1]/div[3]/div/input')).sendKeys('D:\\MAGANG\\Trash\\ttdtest.png');
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/ngb-modal-window/div/div/app-upload-my-signature-modal/div/div[3]/button')).click();
    await driver.sleep(5000);
    let validasi = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(validasi).to.contains("Success");
  })
})
