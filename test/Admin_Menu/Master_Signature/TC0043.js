const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('XL Single Approval', function() {
 
  before(async function(user,pswd) {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    await driver.quit();
  })
  it('Edit Signature', async function() {
    let url = process.env.URL_Cloud;
    await driver.get(url);
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
    await driver.sleep(3000);
    
    await driver.findElement(By.css("#email")).sendKeys(user);
    await driver.findElement(By.css("#exampleInputPassword1")).sendKeys(pswd);
    await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();

    //Store the ID of the original window
    const originalWindow = await driver.getWindowHandle();
    await driver.switchTo().newWindow('window');
    await driver.get('https://sendria.merapi.javan.id/');
    await driver.sleep(5000);
    var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${user}')]`)));
    await ele.click();
    await driver.switchTo().frame(driver.findElement(By.id('message-body')));
    var otp = await driver.wait(until.elementLocated(By.xpath("/html/body/p[2]"))).getText();

    await driver.close();
    await driver.switchTo().window(originalWindow);

    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp1"]')))
    await ele.sendKeys(otp[0]);
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp2"]')))
    await ele.sendKeys(otp[1]);
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp3"]')))
    await ele.sendKeys(otp[2]);
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp4"]')))
    await ele.sendKeys(otp[3]);
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp5"]')))
    await ele.sendKeys(otp[4]);
    var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp6"]')))
    await ele.sendKeys(otp[5]);

    var ele = driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Verify")]')));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Ok")]')));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "Home")]')));
    await ele.click();
    await driver.get("https://approval-fe.dev.alurkerja.com/user");
    await driver.sleep(7000);
    
    await driver.findElement(By.xpath('//*[@id="kt_content"]/div/div/app-user/div/div[2]/div[2]/table/tbody/tr[3]/td[6]/a')).click();
    await driver.sleep(5000);
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[3]/div[4]/div/div/input`)).sendKeys('C:\Users\javan\Pictures\javan issue new\Sample-jpg-image-50kb.jpg');
    await driver.findElement(By.xpath(`//*[@id="kt_body"]/ngb-modal-window/div/div/app-edit-user-modal/div/div[2]/div/form/div[6]/div[2]/button`)).click();
    await driver.sleep(7000);
    let namaDashboard = await driver.findElement(By.xpath('//*[@id="swal2-title"]')).getText();
    expect(namaDashboard).to.contains("Success");
  })
})
