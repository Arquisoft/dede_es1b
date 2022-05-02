import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/catalogoRopa.feature');


let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {

  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page.setJavaScriptEnabled(true);
    await page
      .goto("https://dede-es1b.herokuapp.com/catalogo", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User wants to see products filtered by category', ({given,when,then}) => {

    given('a user on catalog page', async () => {
      expect(page.url()).toContain("/catalogo");


    });

    when('user clicks on ropa button', async () => {
      await page
      .goto("https://dede-es1b.herokuapp.com/catalogo/ropa", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
      expect(page.url()).toContain("/catalogo/ropa");

      delay(1500);

    });

    then('ropa products are loaded from database and shown on page', async () => {

      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      expect(welcomePageText).toContain("Traje asturiano mujer");
      expect(welcomePageText).toContain("VER DETALLES");
      expect(welcomePageText).toContain("21.3");

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