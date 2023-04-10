// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('Detail Jenis Pekerjaan', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Pengguna Dapat Melihat Detail Jenis Pekerjaan', async function() {
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
        
        //lihat detail
        var ele= driver.wait(until.elementLocated(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/tbody/tr[3]/td[5]/div/button[1]')));
        await ele.click();
        await driver.sleep(2000);

        //Edit lewat halaman detail
        var ele= driver.wait(until.elementLocated(By.xpath("/html/body/div[5]/div/div[2]/div[1]/div[3]/button[3]")));
        await ele.click();
        await driver.sleep(2000);
        var ele= driver.wait(until.elementLocated(By.css("input[name='jenis_pekerjaan']")));
        await ele.clear();
        await driver.findElement(By.name('jenis_pekerjaan')).sendKeys('Dokter Anak');
        await driver.sleep(2000);
        await driver.findElement(By.name('keterangan')).clear();
        await driver.findElement(By.name('keterangan')).sendKeys('Spesialis Anak');
        await driver.sleep(2000);

       //save
       await driver.findElement(By.css("button[data-btn='save']")).click();
       await driver.sleep(2000);

       //validasi
       await driver.findElement(By.xpath("//p[contains(text(),'berhasil')]"));
    })
})