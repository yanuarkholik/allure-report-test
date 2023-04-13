/* Halaman Login OTP terpisah untuk memudahkan apabila terdapat perubahan pada halaman login
  * Selenium masuk ke halaman Login kemudian request OTP.
  * Kemudian switch window ke halaman Sendria dan get kode OTP
  * Sleneium switch back ke halaman Login SAP dan input OTP
  * */


const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver')

async function login (user,pswd)
{
  driver = await new Builder().forBrowser('chrome').build();
  vars = {}
  let url = 'https://approval-fe.dev.alurkerja.com/';

  await driver.get(url);
  await driver.manage().window().maximize();

  /* Halaman landing dan klik tombol Sign in as External User*/
  await driver.sleep(5000);
  var ele = driver.wait(until.elementLocated(By.css('.btn-light-outline-login')));
  await ele.click();
  
  /* Input password dan email yang valid pada kolom password dan email kemudian klik tombol Sign in */
  await driver.findElement(By.css("#email")).sendKeys(user);
  await driver.findElement(By.css("#exampleInputPassword1")).sendKeys(pswd);
  await driver.findElement(By.css(".btn.btn-primary")).click();

  // /* Switch ke halaman Sendria untuk menambil OTP */
  // const originalWindow = await driver.getWindowHandle();
  // await driver.switchTo().newWindow('window');
  // await driver.get('https://sendria.merapi.javan.id/');
  // await driver.sleep(5000);
  // var ele = driver.wait(until.elementLocated(By.xpath(`//td[contains(text(), '${user}')]`)));
  // await ele.click();
  // await driver.switchTo().frame(driver.findElement(By.id('message-body')));
  // var otp = await driver.wait(until.elementLocated(By.xpath("/html/body/p[2]"))).getText();

  // await driver.close();
  // await driver.switchTo().window(originalWindow);
  
  // /* Masukkan kode OTP pada modal Verification Code */
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp1"]')))
  // await ele.sendKeys(otp[0]);
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp2"]')))
  // await ele.sendKeys(otp[1]);
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp3"]')))
  // await ele.sendKeys(otp[2]);
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp4"]')))
  // await ele.sendKeys(otp[3]);
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp5"]')))
  // await ele.sendKeys(otp[4]);
  // var ele = driver.wait(until.elementLocated(By.css('input[formcontrolname="otp6"]')))
  // await ele.sendKeys(otp[5]);

  // var ele = driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Verify")]')));
  // await ele.click();
  // var ele = driver.wait(until.elementLocated(By.xpath('//button[contains(text(), "Ok")]')));
  // await ele.click();

  // /* Validasi halaman Home */
  await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "Home")]')));
}

async function tanggal(){
  var date = new Date();
  var tahun = date.getFullYear();
  var bulan = date.getMonth();
  var tanggal = date.getDate();
  var hari = date.getDay();
  var jam = date.getHours();
  var menit = date.getMinutes();
  var detik = date.getSeconds();
  switch(hari) {
  case 0: hari = "Minggu"; break;
  case 1: hari = "Senin"; break;
  case 2: hari = "Selasa"; break;
  case 3: hari = "Rabu"; break;
  case 4: hari = "Kamis"; break;
  case 5: hari = "Jum'at"; break;
  case 6: hari = "Sabtu"; break;
  }
  switch(bulan) {
  case 0: bulan = "Januari"; break;
  case 1: bulan = "Februari"; break;
  case 2: bulan = "Maret"; break;
  case 3: bulan = "April"; break;
  case 4: bulan = "Mei"; break;
  case 5: bulan = "Juni"; break;
  case 6: bulan = "Juli"; break;
  case 7: bulan = "Agustus"; break;
  case 8: bulan = "September"; break;
  case 9: bulan = "Oktober"; break;
  case 10: bulan = "November"; break;
  case 11: bulan = "Desember"; break;
  }
  var tampilTanggal = "Tanggal: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
  var tampilWaktu = "Jam: " + jam + ":" + menit + ":" + detik;
  console.log(tampilTanggal);
  console.log(tampilWaktu);
}

module.exports = {
  login: login,
  tanggal: tanggal,
};