// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Tambah Jenis Hukuman Disiplin', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Tidak Dapat Menambah Jenis Hukuman Disiplin dengan Inputan Kosong', async function() {
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
        
        //tambah dengan data kosong
        var ele= driver.wait(until.elementLocated(By.className('w-full sm:w-auto mt-3 sm:mt-0')));
        await ele.click();
        await driver.sleep(3000);

        //save
        await driver.findElement(By.css('#modal-create .btn-primary')).click();
        await driver.sleep(2000);

        //validasi
        await driver.findElement(By.xpath("//div[contains(text(),'Jenis Pekerjaan wajib diisi.')]"));

        //mengisi field tidak required
        await driver.findElement(By.name('keterangan')).sendKeys('TKY48');

        //save
        await driver.findElement(By.css('#modal-create .btn-primary')).click();
        await driver.sleep(2000);

        //validasi
        await driver.findElement(By.xpath("//div[contains(text(),'wajib diisi')]"));
    })
})