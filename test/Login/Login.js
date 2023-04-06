/* Halaman Login OTP terpisah untuk memudahkan apabila terdapat perubahan pada halaman login
  * Selenium masuk ke halaman Login kemudian request OTP.
  * Kemudian switch window ke halaman Sendria dan get kode OTP
  * Sleneium switch back ke halaman Login SAP dan input OTP
  * */


const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver')

async function login (user,pswd, sendria)
{
  driver = await new Builder().forBrowser('chrome').build();
  vars = {}
  let url = process.env.URL_Cloud;

  await driver.get(url);
  await driver.manage().window().maximize();

  /* Halaman landing dan klik tombol Sign in as External User*/
  await driver.sleep(5000);
  var ele = driver.wait(until.elementLocated(By.css('.btn-light-outline-login')));
  await ele.click();
  
  /* Input password dan email yang valid pada kolom password dan email kemudian klik tombol Sign in */
  await driver.findElement(By.css("#email")).sendKeys(user);
  await driver.findElement(By.css("#exampleInputPassword1")).sendKeys(pswd);
  await driver.findElement(By.css(".btn.btn-primary")).click();

  /* Switch ke halaman Sendria untuk menambil OTP */
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
  
  /* Masukkan kode OTP pada modal Verification Code */
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

  /* Validasi halaman Home */
  await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "Home")]')));
}

module.exports = {
  login: login
};