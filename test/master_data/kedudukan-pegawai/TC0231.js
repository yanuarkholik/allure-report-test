const { clear } = require('console');
const exp = require('constants');
const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('MASTER DATA KEDUDUKAN PEGAWAI', function() {
 
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    // await driver.manage().window().setRect({ width: 1680, height: 956 });
  })
  after(async function() {
    await driver.quit();
  })
  it('[Kedudukan Pegawai] Administrator dapat mengurutkan Kedudukan Pegawai secara ascending ', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kedudukan Pegawai
    await driver.findElement(By.linkText("Kedudukan Pegawai")).click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kedudukan Pegawai' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kedudukan Pegawai');

    // double click 
    // var doubleClick = driver.findElement(By.xpath('/html/body/div[5]/div/div[2]/div[3]/div/div/table/thead/tr/th[4]'));
    // var actions = driver.actions({bridge: true});
    // actions.doubleClick(doubleClick).perform();

    // get the table 
    let table = await driver.findElement(By.css("table[class='table m-b-0 table-striped text-xs md:text-sm']"));
    expect(table).to.exist;
    
    await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[2]")).click();
    await driver.sleep(2000);
    let smallest_id = await driver.findElement(By.xpath("(//div[@class='box']/div/div/table/tbody/tr[1]/td[2])")).getText();
    expect(smallest_id).to.equal('1');
    

    // let last_tr = await driver.findElement(By.xpath("(//div[@class='box']/div/div/table/tbody/tr[last()])"));
    // expect(last_tr).to.exist;
    // let first_td = await last_tr.findElement(By.xpath(".//td[1]")).getText();
    // expect(first_td).to.exist;
    // let runner_id=[];
    // let runner_nama_kedudukan=[];
    // let total_row = parseInt(first_td);
    // for(let t = 1; t <= total_row; t++){
    //   runner_id[t] = await driver.findElement(By.xpath("//div[@class='box']/div/div/table/tbody/tr["+t+"]/td[2]")).getText();
    //   runner_nama_kedudukan[t] = await driver.findElement(By.xpath("//div[@class='box']/div/div/table/tbody/tr["+t+"]/td[3]")).getText();
    //   await driver.sleep(1000);
    // }
    // await driver.sleep(3000);
    // let sorted_runner_id = await runner_id.sort();
    // await runner_nama_kedudukan.sort();

    // var blob = await new Blob([sorted_runner_id], {type: "text/plain;charset=utf-8"});
    // await FileSaver.saveAs(blob, "sorted_runner_id.txt");

    // await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[2]")).click();
    // await driver.sleep(3000);

    // let sorted_id=[];
    // let sorted_nama_kedudukan=[];
    // for(let t = 1; t <= total_row; t++){
    //   sorted_id[t] = await driver.findElement(By.xpath("//div[@class='box']/div/div/table/tbody/tr["+t+"]/td[2]")).getText();
    //   await driver.sleep(1000);
    //   expect(sorted_id[t]).to.equal(sorted_runner_id[t]);
    // }


  })
})
