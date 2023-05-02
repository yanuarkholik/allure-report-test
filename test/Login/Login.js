
const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver')

async function login (user,pswd)
{
  driver = await new Builder().forBrowser('chrome').build();
  vars = {}
  let url = process.env.URL_Merapi;
  await driver.get(url);
  // await driver.get("https://simpatik-fe.merapi.javan.id/");
  await driver.manage().window().maximize();
  await driver.sleep(5000);
  
  /* Input password dan username yang valid pada kolom password dan email kemudian klik tombol login */
  await driver.findElement(By.css("#username")).sendKeys(user);
  await driver.findElement(By.css("#password")).sendKeys(pswd);
  await driver.findElement(By.css("button[type='submit']")).click()
  await driver.sleep(5000);

}

module.exports = {
  login: login,
};
