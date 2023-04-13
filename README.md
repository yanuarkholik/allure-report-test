# XL-Single Approval Platform
Support tim XL untuk monitoring aplikasi (getapprove.xl.co.id)[getapprove.xl.co.id] & melakukan bug fixing jika terjadi issue

### Setup Selenium
Untuk meringankan QA dalam melakukan regresi maka diterapkan automation menggunakan Selenium (javascript). Berikut cara setup selenium:
- Pertama pastikan node.js sudah terinstall pada sistem atau dapat [download disini](https://nodejs.org/en/download).
- Untuk initiate project maka jalan kan `npm init` atau `npm init -y` untuk inisiasi project secara default.
- Untuk install [selenium](https://www.selenium.dev/) run command berikut pada terminal:
```
npm install selenium-webdriver
npm install chromedriver // pastikan versi chromedriver sama dengan versi browser
npm install dotenv
```

### Setup Allure Report
- Kemudian install dependencies yaitu allure-report run command berikut:
```
npm install allure-commandline
npm install mocha-allure-reporter
```

### Run Selenium dan Allure Report
- Setelah setup selenium dan allure-report pastikan `scripts` pada `package.json` seperti dibawah
```
  "scripts": {
    "test": "mocha -r dotenv/config --no-timeouts --reporter mocha-allure-reporter",
    "start": "allure open allure-report --port 8080",
    "report": "allure generate allure-results --clean"
  },
```
- Jalankan `npm run report` untuk generate folder `allure-report` 
- Kemudian jalankan `npm run start` pada terminal untuk meluncurkan allure-report pada browser dengan port `8080` (jangan stop/close/ctrl+c terminal)
![allure-start](https://gitlab.javan.co.id/automation-test/selenium-sap/-/blob/master/data/img/allure_start.png)
- Kemudian run selenium test yang diinginkan pada terminal lain dan akan generate folder `allure-results` secara otomatis.
```
npm test
npm test <path> // untuk path spesifik
```
- Dan jalankan `npm run report` dan klik tombol refresh halaman port 8080
![allure-report](https://gitlab.javan.co.id/automation-test/selenium-sap/-/blob/master/data/img/allure-report.png)
![allure-report2](https://gitlab.javan.co.id/automation-test/selenium-sap/-/blob/master/data/img/allure-report2.png)

