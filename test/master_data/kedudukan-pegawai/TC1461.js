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
  it('[Kedudukan Pegawai] Administrator dapat melakukan perubahan pada data Kedudukan Pegawai dari halaman detail', async function() {
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
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[20]/a")).click();
    await driver.sleep(2000);

    //Expect: There is title 'List Kedudukan Pegawai' 
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Kedudukan Pegawai')

    // search first row
    let second_row = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[3]"));
    expect(second_row).to.exist;
    let keyword = await second_row.getText();
    let data_id = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr[2]/td[2]")).getText();

    // search data
    let search = await driver.findElement(By.name('search'));
    await search.sendKeys(keyword, Key.ENTER);
    await driver.sleep(3000);

    // expect button detail
    let button_detail = await driver.findElement(By.xpath("//*[@class='box']/div/div/table/tbody/tr/td[4]/div/button[1]"));
    expect(button_detail).to.exist;

    await button_detail.click();
    await driver.sleep(3000);

    let title_detail = await driver.wait(until.elementLocated(By.css('h3[class="font-bold text-base leading-6"]'))).getText();
    expect(title_detail).to.equal('Detail Kedudukan Pegawai');

    
    // verify first row is the right ID
    let text_id = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[1]/dt")).getText();
    expect(text_id).to.equal('Id');

    let value_id = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[1]/dd")).getText();
    expect(value_id).to.equal(data_id);

    // verify 2nd row is the right name of kedudukan pegawai 
    let text_kedudukan_pegawai = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[2]/dt")).getText();
    expect(text_kedudukan_pegawai).to.equal('Kedudukan Pegawai');

    let value_kedudukan_pegawai = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[2]/dd")).getText();
    expect(value_kedudukan_pegawai).to.equal(keyword);

    let button_edit = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[3]/button[@class='btn btn-primary dark:bg-slate-800 w-full sm:w-auto']"));
    expect(button_edit).to.exist;

    await button_edit.click();
    await driver.wait(until.elementLocated(By.id('modal-edit')));

    // /html/body/div[5]/div/div[2]/div[2]/div/div/div[1]/h2
    // let title_modal = await driver.findElement(By.xpath('//*[@id="modal-edit"]/div[@class="modal-dialog modal-lg"]/div[@class="modal-content"]/div[@class="modal-header"]/h2')).getText();
    // expect(title_modal).to.contains('Ubah Kedudukan Pegawai');

    // verify input label
    // /html/body/div[5]/div/div[2]/div[2]/div/div/div[2]/form/div/div/div/label
    let text_label_modal = await driver.wait(until.elementLocated(By.xpath("//*[@id='modal-edit-body']/form/div/div/div/label"))).getText();
    expect(text_label_modal).to.contains('Kedudukan Pegawai');

    // verify form nama kedudukan pegawai
    let input_form = await driver.findElement(By.name("kedudukan_pegawai"));
    expect(input_form).to.exist;

    await input_form.clear();
    await input_form.sendKeys(keyword + "-1");
    
    let update_btn = await driver.findElement(By.xpath("//*[@id='modal-edit']/div/div/div[3]/button[2]"));
    expect(update_btn).to.exist;
    
    await update_btn.click();

    await driver.sleep(3000);
    await driver.findElement(By.xpath("//p[contains(text(), 'Data berhasil diperbarui')]"));

    // // validate if the data changed 
    // // search data
    let kedudukan_pegawai_edited = await driver.findElement(By.xpath("//*[@class='content']/div[2]/div[1]/div[2]/div/dl/div[2]/dd")).getText();
    expect(kedudukan_pegawai_edited).to.equal(keyword + '-1');

  })
})
