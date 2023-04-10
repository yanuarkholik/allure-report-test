// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Edit Jenis Pekerjaan', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Dapat Melakukan Perubahan Jenis Pekerjaan', async function() {
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
        
        //edit
        var ele= driver.wait(until.elementLocated(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[2]/td[5]/div/button[2]')));
        await ele.click();
        await driver.sleep(2000);

        //Edit lewat button edit
        var ele= driver.wait(until.elementLocated(By.css("input[name='jenis_pekerjaan']")));
        await ele.clear();
        await driver.sleep(2000);
        await driver.findElement(By.name('jenis_pekerjaan')).sendKeys('Tentara');
        await driver.sleep(2000);
        await driver.findElement(By.name('keterangan')).clear();
        await driver.findElement(By.name('keterangan')).sendKeys('Anggota TNI');
        await driver.sleep(2000);

       //save
       await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[3]/button[2]')).click();
       await driver.sleep(2000);

       //validasi
       await driver.findElements(By.xpath("//p[contains(text(),'Data berhasil diperbarui')]"));
    })
})