/* Halaman Login terpisah untuk memudahkan apabila terdapat perubahan pada halaman login 
    * QA Touch simpatik dapat diakses di https://javan.qatouch.com/v2#/overview/p/laxd
    * Gitlab simpatik dapat diakses di https://gitlab.javan.co.id/automation-test/selenium-simpatik
    * Taiga simpatik dapat diakses di https://taiga.javan.id/project/kominfo-simpatik-2022/timeline
    * */

const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function login(user, pswd) {
    driver = await new Builder().forBrowser('chrome').build();
    expect = require('chai').expect;
    vars = {};
    await driver.get(process.env.URL);
    await driver.manage().window().maximize();
    
    await driver.findElement(By.css("#username")).sendKeys(user);
    await driver.findElement(By.css("#password")).sendKeys(pswd);
    await driver.findElement(By.css("button[type='submit']")).click()
}

module.exports = {
    login:login,
};