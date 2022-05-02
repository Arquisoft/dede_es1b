import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/userChecksProducts.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {

  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("https://dede-es1b.herokuapp.com/inicio", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User accesses to the webpage', ({given,when,then}) => {

    given('a user on welcome page', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      //expect(welcomePageText).toMatch("Bienvenido a AsturShop");
    });

    when('user accesses main page', async () => {
      //await expect(page).toClick('a',{text:"Empezar"});
      expect(page.url()).toContain("/inicio");

     delay(1000);

    });

    then('products are loaded from database and shown on page', async () => {
      const welcomePageText = await page.evaluate(() => document.body.textContent);
      
      console.log(welcomePageText);
      expect(welcomePageText).toContain("Fabada asturiana");
      expect(welcomePageText).toContain("Lata de callos con jamón");
      expect(welcomePageText).toContain("Sidra Asturiana premium (6 uds.)");
      expect(welcomePageText).toContain("Horreo hecho a mano");
      expect(welcomePageText).toContain("Traje asturiano mujer");
      expect(welcomePageText).toContain("comida");
      expect(welcomePageText).toContain("ropa");
      expect(welcomePageText).toContain("recuerdo");
      expect(welcomePageText).toContain("VER DETALLES");


    });
  })

  afterAll(async ()=>{
    browser.close()
  })

});

function delay(time:number){
  return new Promise(function (resolve){
    setTimeout(resolve,time);
  });
}