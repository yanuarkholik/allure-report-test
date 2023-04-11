const { clear } = require('console');
const exp = require('constants');
const { Builder, By, Key, until } = require('selenium-webdriver');
var chai = require("chai"),
    expect = chai.expect; // preference and tested with expect

chai.use(require("chai-sorted"));
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

    // get the table 
    let table = await driver.findElement(By.css("table[class='table m-b-0 table-striped text-xs md:text-sm']"));
    expect(table).to.exist;
    
    await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[2]")).click();
    await driver.sleep(2000);

    let last_tr = await driver.findElement(By.xpath("(//div[@class='box']/div/div/table/tbody/tr[last()])"));
    expect(last_tr).to.exist;
    let first_td = await last_tr.findElement(By.xpath(".//td[1]")).getText();
    expect(first_td).to.exist;
    let runner_id=[];
    let total_row = parseInt(first_td);
    
    for(let t = 1; t <= total_row; t++){
      runner_id[t-1] = parseInt( await driver.findElement(By.xpath("//div[@class='box']/div/div/table/tbody/tr["+t+"]/td[2]")).getText());
      await driver.sleep(1000);
    }
    expect(runner_id).to.be.sorted({descending: false});


    await driver.findElement(By.xpath("//table[@class='table m-b-0 table-striped text-xs md:text-sm']/thead/tr/th[3]")).click();
    await driver.sleep(2000);
    let runner_nama_kedudukan=[];
    for(let t = 1; t <= total_row; t++){
      runner_nama_kedudukan[t-1] = await driver.findElement(By.xpath("//div[@class='box']/div/div/table/tbody/tr["+t+"]/td[3]")).getText();
      await driver.sleep(1000);
    }
    // notes : if using mixed case (lower upper string ) chai sort doesnt work. 
    // example 
    // expect(['Aktif', 'CLTN','Masa Persiapan Pensiun','Non Aktif','Pejabat Negara','Pemberhentian Sementara','Penerima Uang Tunggu','Perpanjangan CLTN', 'PNS yang dinyatakan hilang']).to.be.sorted({descending:false});

    let lower_case_kedudukan = runner_nama_kedudukan.map(nama=>nama.toLowerCase());
    expect(lower_case_kedudukan).to.be.sorted({descending:false});
    

  })
})
