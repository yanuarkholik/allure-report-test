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
  it('[Kedudukan Pegawai] Administrator dapat melakukan perubahan pada data Kedudukan Pegawai', async function() {
    await driver.findElement(By.css("#username")).sendKeys('doni007');
    await driver.findElement(By.css("#password")).sendKeys('secret');
    await driver.findElement(By.css("button[type='submit']")).click()
    await driver.sleep(4500);   
    
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard');

    //Select Master Data on Sidebar
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(1000);
    
    //Select Menu Kedudukan Pegawai
    await driver.findElement(By.linkText("Kedudukan Pegawai")).click();
    // await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kedudukan Pegawai' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kedudukan Pegawai')
    
    let first_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[3]"));
    expect(first_row).to.exist;
    let keyword = await first_row.getText();
    let data_id = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[2]")).getText();

    // search data
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys(keyword, Key.ENTER);
    await driver.sleep(3000);

    // expect button edit
    let button_edit = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[4]/div/button[2]"));
    expect(button_edit).to.exist;

    await button_edit.click();
    await driver.sleep(3000);
    
    // expect modal edit
    await driver.wait(until.elementLocated(By.id('modal-edit')));

    let title_detail = await driver.findElement(By.xpath('//*[@id="modal-edit"]/div/div/div[1]/h2')).getText();
    expect(title_detail).to.equal('Ubah Kedudukan Pegawai');

    // verify input label
    let text_id = await driver.findElement(By.xpath("//*[@class='modal-body']/form/div/div/div/label")).getText();
    expect(text_id).to.contains('Kedudukan Pegawai');

    // verify form nama kedudukan pegawai
    let input_form = await driver.findElement(By.name("kedudukan_pegawai"));
    expect(input_form).to.exist;

    await input_form.clear();
    await input_form.sendKeys(keyword + " -1");

    // /html/body/div[5]/div/div[2]/div[5]/div/div/div[3]/button[2]
    
    // let update_btn = await driver.findElement(By.xpath("//*[@class='modal-content']/div[3]/button[2]"));
    let update_btn = await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div[3]/button[2]"));
    expect(update_btn).to.exist;
    
    await update_btn.click();
    // WebDriverWait wait = new WebDriverWait(driver, 10);
    // driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    await driver.sleep(3000);
    await driver.findElement(By.xpath("//p[contains(text(), 'Data berhasil diperbarui')]"));

    // // validate if the data changed 
    // // search data
    await search.sendKeys(keyword, Key.ENTER);
    let data_after = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[1]/td[3]"));
    expect(data_after).to.exist;
    let keyword_2 = await first_row.getText();
    expect(keyword_2).to.equal(keyword + " -1");
  })
})
