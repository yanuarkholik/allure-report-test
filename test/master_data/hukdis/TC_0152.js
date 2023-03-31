// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Cari Kata Tidak Sesuai', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Dapat Melakukan Pencarian Jenis Hukuman Disiplin Berdasarkan Kata yang Tidak Sesuai', async function() {
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
        
        //search
        var ele= driver.wait(until.elementLocated(By.className('form-control px-10')));
        await ele.click();
        await driver.findElement(By.className('form-control px-10')).sendKeys('zzz');
        await driver.sleep(2000);
        await driver.findElement(By.className("btn btn-primary shadow-md")).click()
        await driver.sleep(2000);
        
        //validasi
        await driver.findElements(By.xpath("//td[contains(text(),'Tidak ada data')]"));
    })
})