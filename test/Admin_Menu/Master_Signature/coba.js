const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');
// const login = require('../../Login/Login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  })
  after(async function() {
    await driver.sleep(3000);
    // await driver.quit();
  })
  it('coba" ae ', async function() {
    await driver.sleep(1000);
    await driver.get("https://sendria.merapi.javan.id/");
    await driver.sleep(7000);
    await driver.findElement(By.xpath('//*[@id="messages"]/tr[1]/td[1]')).click();
  })
})
