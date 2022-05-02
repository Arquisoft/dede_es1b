import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

/* Feature: Getting info of a specified  product

Scenario: User wants to check details of a product
  Given a user on main page
  When user clicks on "ver detalles" button of a product
  Then info of the product is shown to the user on another window */

const feature = loadFeature('./features/userWatchsProductsDetails.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  jest.setTimeout(30000)

  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000/inicio", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User accesses to the webpage', ({given,when,then}) => {

    given('a user on main page', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      expect(welcomePageText).toContain("Fabada asturiana");
      expect(welcomePageText).toContain("Latas de callos con jamón");
      expect(welcomePageText).toContain("Sidra Asturiana premium (6 uds.)");
      expect(welcomePageText).toContain("Horreo hecho a mano");
      expect(welcomePageText).toContain("Traje asturiano mujer");
      expect(welcomePageText).toContain("comida");
      expect(welcomePageText).toContain("ropa");
      expect(welcomePageText).toContain("recuerdo");
      expect(welcomePageText).toContain("VER DETALLES");
    });

    when('user clicks on "ver detalles" button of a product', async () => {
      await expect(page).toClick('Button',{text:"VER DETALLES"});
      expect(page.url).toContain("/detallesProducto");

     delay(1000);

    });

    then('info of the product is shown to the user on another window', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      
      expect(welcomePageText).toContain("Categoria:");
      expect(welcomePageText).toContain("Descripcion");
      expect(welcomePageText).toContain("Precio:");

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