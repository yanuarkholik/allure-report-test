// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Tambah Jenis Pekerjaan', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Dapat Menambah Jenis Pekerjaan', async function() {
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
        var ele= driver.wait(until.elementLocated(By.linkText('Jenis Pekerjaan')));
        await ele.click();
        
        //tambah
        var ele= driver.wait(until.elementLocated(By.className('w-full sm:w-auto mt-3 sm:mt-0')));
        await ele.click();
        await driver.sleep(3000);
        await driver.findElement(By.name('jenis_pekerjaan')).sendKeys('Idol Korea');
        await driver.findElement(By.name('keterangan')).sendKeys('Seventeen')
        
        //save
        await driver.findElement(By.css('#modal-create .btn-primary')).click();
        await driver.sleep(2000);

        //validasi
        await driver.findElements(By.xpath("//p[contains(text(),'Data berhasil disimpan')]"));
    })
})