const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver')

async function login (user,pswd)
{
  driver = await new Builder().forBrowser('chrome').build();
  vars = {}
  //Open Window
  let url = process.env.URL_Cloud;
  await driver.get(url);
  await driver.sleep(2000);
  await driver.manage().window().maximize();
  await driver.sleep(2000);
  await driver.findElement(By.xpath('//*[@id="kt_login"]/div[2]/app-login/div/div[2]/div/button[2]')).click();
  await driver.sleep(3000);
  
  //Login
  
  await driver.findElement(By.css("#email")).sendKeys(user);
  await driver.findElement(By.css("#exampleInputPassword1")).sendKeys(pswd);
  await driver.findElement(By.css("#kt_login > div.h-100 > app-login > div > div.col-12.col-md-6.d-flex.align-items-center.justify-content-end > div > form > button")).click();

  //Get OTP
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
  
  //Fill OTP
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
}

module.exports = {
  login: login
};