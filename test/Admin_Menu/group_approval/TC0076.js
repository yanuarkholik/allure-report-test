const { By, Key, until } = require('selenium-webdriver');
require('chromedriver');
const loginModule = require('../../login/login.js');

describe('XL Single Approval', function() {
 
  before(async function() {
    let user = process.env.user3;
    let pswd = process.env.pswd3;
    await loginModule.login(user,pswd);
  })
  after(async function() {
    await driver.sleep(3000);
    await loginModule.tanggal();
    await driver.quit();
  })
  it('Dapat tambah data approval pada halaman Group Approval', async function() {
  
    /* Dapat tambah data approval pada halaman Group Approval
      * Login sebagai Admin Cloud
      * Pilih menu Admin Menu
      * Pilih sub menu Group Approval
      * Tampil halaman Group Approval
      * Klik tombol Add Group Approval
      * Isi form Group Approval
      * Klik tombol Submit
      * */

    await driver.get("https://approval-fe.dev.alurkerja.com/group-approval");

    // Halaman Group Approval
    await driver.sleep(5000);
    var ele = driver.wait(until.elementLocated(By.xpath('//*[@id="kt_content"]/div/div/app-group-approval/div/div[1]/div[2]/button')));
    await ele.click();
    var ele = driver.wait(until.elementLocated(By.name('name')));
    await ele.sendKeys('test Add Group Approval');

    // Add member in Form
    var member = "Ardellia Putri";
    var member2 = "Indrianti";

    await driver.findElement(By.xpath("//mat-select[@role='combobox']")).click();
    await driver.findElement(By.xpath("//input[@aria-label='dropdown search']")).sendKeys(member);
    var ele = driver.wait(until.elementLocated(By.xpath(`//mat-option/span[contains(text(), '${member}')]`)))
    await ele.click();
    await driver.findElement(By.xpath("//button[contains(text(), 'add')]")).click();

    // await driver.findElement(By.xpath("//mat-select[@role='combobox']")).click();
    // await driver.findElement(By.xpath("//input[@aria-label='dropdown search']")).sendKeys(member2);
    // var ele = driver.wait(until.elementLocated(By.xpath(`//mat-option/span[contains(text(), '${member2}')]`)))
    // await ele.click();
    // await driver.findElement(By.xpath("//button[contains(text(), 'add')]")).click();
    
    //Submit
    await driver.findElement(By.xpath("//button[contains(text(), 'Submit')]")).click();
    
    // Click button on success notification
    var ele = driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'OK')]")));
    await ele.click();
  })
})
