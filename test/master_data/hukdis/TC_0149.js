// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Asc', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Dapat Mengurutkan Jenis Hukuman Disiplin Secara Ascending', async function() {
        await driver.get("https://simpatik-fe.merapi.javan.id/");
        await driver.manage().window().maximize();
        
        //login
        await driver.findElement(By.id('username')).sendKeys('doni007');
        await driver.findElement(By.id('password')).sendKeys('secret');
        await driver.sleep(2000);
        await driver.findElement(By.className('btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 h-12')).click();
        
        //menu masterdata
        var ele= driver.wait(until.elementLocated(By.linkText('Master Data')));
        await ele.click();
        var ele= driver.wait(until.elementLocated(By.linkText('Jenis Hukuman Disiplin')));
        await ele.click();
        
        //asc id
        var ele= driver.wait(until.elementLocated(By.css('tr > .whitespace-nowrap:nth-child(2)')));
        await ele.click();
        await driver.sleep(3000);

        //asc jenis
        var ele= driver.wait(until.elementLocated(By.css('.whitespace-nowrap:nth-child(3)')));
        await ele.click();
        await driver.sleep(3000);

        //asc kategori
        var ele= driver.wait(until.elementLocated(By.css('.whitespace-nowrap:nth-child(4)')));
        await ele.click();
        await driver.sleep(3000);

    })
})