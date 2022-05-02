import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./e2e/features/ventanaAyuda.feature');


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
      .goto("https://dede-es1b.herokuapp.com/inicio", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User wants to check help page', ({given,when,then}) => {

    given('a user on main page', async () => {
      expect(page.url()).toContain("/inicio");

    });

    when('user clicks on help button on menu bar', async () => {
      await page
      .goto("https://dede-es1b.herokuapp.com/ayuda", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
      expect(page.url()).toContain("/ayuda");

      delay(1500);

    });

    then('help page is loaded', async () => {

      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      expect(welcomePageText).toContain("Preguntas Frecuentes");

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