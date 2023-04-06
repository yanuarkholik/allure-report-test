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
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-documentcategory/div/div[1]/div[2]/button')).click();
    await driver.sleep(3000);

    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[1]/div/div[1]/div/input')).sendKeys('Name Test');
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[1]/div/div[5]/div/select/option[2]')).click();
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/form/div[1]/div/div[6]/div/select/option[2]')).click();
    await driver.sleep(2000);
    let input = await driver.findElement(By.css(" #kt_wizard_v1 > div.row.my-10.my-lg-15.px-lg-12 > div > form > div.card.card-custom.pb-5 > div > div:nth-child(9) > div.col-lg-2.col-sm-12 > div > div > input"));
    await input.sendKeys("/Users/ardelliapp/Downloads/IOM.docx");
    await driver.sleep(2000);

    await driver.findElement(By.xpath('//*[@id="cdk-drop-list-0"]/div/div/div/div[1]/div/div/div[1]/div[2]/div')).click();
    await driver.sleep(3000);
    await driver.findElement(By.xpath('//*[@id="cdk-drop-list-0"]/div/div/div/div[1]/div/div/div[2]/div/input')).sendKeys('Field Label Test');
    await driver.findElement(By.xpath('//*[@id="cdk-drop-list-0"]/div/div/div/div[1]/div/div/div[3]/div/select/option[3]')).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div[2]/div[2]')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath('//*[@id="kt_wizard_v1"]/div[2]/div/div[2]/div[2]/div[1]')).click();
    await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="kt_body"]/div/div/div[6]/button[1]')).click();
   

    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText(); 
    expect(namaDashboard).to.contains("Success");
  })
})
