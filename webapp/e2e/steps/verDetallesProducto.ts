import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/verDetallesProducto.feature');


let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {

  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("https://dede-es1b.herokuapp.com/catalogo/ropa", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User wants to check product details', ({given,when,then}) => {

    given('a user on ropa page', async () => {
        expect(page.url()).toContain("/catalogo/ropa");
        const welcomePageText = await page.evaluate(()=> document.body.textContent);

        expect(welcomePageText).toContain("Traje asturiano mujer");
     
        expect(welcomePageText).toContain("ropa");
    });

    when('user clicks on details button', async () => {
       
      await expect(page).toClick('button',{text:"VER DETALLES"});

     delay(1000);

    });

    then('details of specified product are shown', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      
     
      expect(welcomePageText).toContain("Precio:  21.3 €");
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