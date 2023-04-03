const { Builder, By, Key, until } = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver');

describe ('SIMPATIK', function() {
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {}
  });
  after(async function() {
    await driver.sleep(3000);
  });
  it('NEGARA', async function() {
    await driver.get("https://simpatik-fe.merapi.javan.id/login");
    await driver.manage().window().maximize();
    await driver.findElement(By.id("username")).sendKeys("doni007");
    await driver.findElement(By.id("password")).sendKeys("secret");
    await driver.findElement(By.className("btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 h-12")).click();
    await driver.sleep(3000);   
    let dashboard = await driver.findElement(By.css('h1[class="font-bold text-lg my-4"]')).getText();
    expect(dashboard).to.equal('Dashboard')

    //Pilih Menu Master Data
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/a/div/div")).click();
    await driver.sleep(3000);
    //Pilih Sub Menu Negara
    await driver.findElement(By.xpath("//*[@class='py-5 md:py-0']/nav/ul/li[4]/ul/li[24]/a")).click();
    await driver.sleep(3000);
    let list = await driver.findElement(By.css('h2[class="text-lg font-medium mr-auto flex-none"]')).getText();
    expect(list).to.equal('List Negara')
    await driver.sleep(3000);
    //Tambah Negara
    await driver.findElement(By.css("button[class='btn bg-green-600 text-white w-left']")).click()
    await driver.sleep(5000);
    await driver.findElement(By.name("negara")).sendKeys("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed mauris eget ex bibendum efficitur ut imperdiet risus. Pellentesque eu sollicitudin risus, at efficitur purus. Suspendisse accumsan, eros vitae sagittis aliquet, enim nulla mattis nisi, ac lacinia quam arcu vel velit. Curabitur congue sagittis urna interdum vehicula. Donec auctor erat tellus, quis volutpat odio feugiat ut. Vestibulum aliquam nibh ante, eget congue risus rutrum id. In vitae justo interdum, laoreet metus at, placerat urna. Curabitur sed nunc vel diam aliquam aliquet vel et neque. Pellentesque id orci elit. Fusce consequat malesuada arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec facilisis dictum purus, eu rhoncus quam viverra a. Phasellus felis sem, laoreet et tortor porta, dictum malesuada erat. Fusce fringilla ultrices lacus, non gravida ante molestie nec. Maecenas rhoncus malesuada sapien, sit amet auctor mi bibendum eu. Pellentesque id ultricies ligula. Donec vel lorem quis turpis pretium bibendum. Aenean tempor tellus nunc, id consectetur orci dignissim in. Nam quam sem, rutrum id felis id, rhoncus bibendum sapien. Quisque sed enim a ex scelerisque faucibus. Nullam ac erat non leo malesuada condimentum id vel sem. Donec lacinia nec diam nec tempus. Proin porta auctor sodales. Pellentesque non nunc volutpat, suscipit lacus sit amet, egestas mi. Duis vitae imperdiet eros, ac vehicula enim. Curabitur sit amet neque nec est dapibus sodales. Quisque eget dignissim nulla.");
    await driver.sleep(5000);
    await driver.findElement(By.className("btn btn-primary md:w-auto w-[48%]")).click();
    await driver.sleep(1000);
    // Alert Kesalahan Input
    await driver.findElements(By.xpath("p[contains(text(), 'Ada Kesalahan Input')]"));
    await driver.sleep(2000);
    //Mandatory
    let mandatory_Negara = await driver.findElement(By.className('text-danger mt-1')).getText();
    expect(mandatory_Negara).to.equal('Negara maksimal berisi 100 karakter.');
  });
});