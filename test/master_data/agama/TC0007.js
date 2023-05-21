const { By, Key, until } = require('selenium-webdriver');
const pages = require('../../../pages/pages');

describe('Simpatik', function() {
  describe('Master Data', function() {
    describe('Master Data Agama', function() {
      before(async function() {
        let user = process.env.user1;
        let pswd = process.env.pswd1;
        await pages.login(user,pswd);
      })
      after(async function() {
        await driver.quit();
      })
      it('[TC0007] Admin dapat mengurutkan agama secara ascending', async function() {

        /* Admin dapat mengurutkan agama secara ascending
          * Login sebagai Admin
          * Pilih menu Master Data
          * Pilih sub menu Agama
          * Klik judul kolom list data satu kali 
          * */
    
        // halaman list data Agama
        await driver.wait(until.elementsLocated(By.xpath("//h1[contains(text(), 'Dashboard')]")));
        await driver.findElement(By.linkText("Master Data")).click();
        var ele = driver.wait(until.elementLocated(By.linkText("Agama")));
        await ele.click();

        // mengurutkan data Agama secara ascending
        const sortList = ['id', 'agama'];
        for (let i = 0; i < sortList.length; i++) {
            let list = sortList[i];
            let listElem = driver.wait(until.elementLocated(By.xpath(`//th[@*="sortBy('${list}')"]`)));

            listElem.click();

            // tunggu hingga table terurut ascending
            while (await driver.wait(until.elementLocated(By.xpath(`//table//tr[1]/td[${i+1}]`))) == true) {
              let prev = await driver.findElement(By.xpath(`//table//tr[${i+1}]/td[${i+2}]`)).getText();
              let curr = await driver.findElement(By.xpath(`//table//tr[${i+2}]/td[${i+2}]`)).getText();
              if (prev > curr) {
                return false;
              } 
              else{
                  return true;
              }
            }
            await driver.sleep(3000);
        }
      })
    })
  })
})