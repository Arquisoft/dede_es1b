import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/catalogRecuerdos-page.feature');

/* 
Feature: Getting products from DB filtered by comida

Scenario: User wants to see products filtered by category
  Given a user on catalog page
  When user clicks on comida button
  Then comida products are loaded from database and shown on page 
*/

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000/catalogo", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('Getting products from DB filtered by souvenirs', ({given,when,then}) => {

    given('a user on catalog page', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      expect(welcomePageText).toContain("CATÁLOGO");
      expect(welcomePageText).toMatch("ROPA");
      expect(welcomePageText).toMatch("COMIDA");
      expect(welcomePageText).toMatch("SOUVENIRS");


    });

    when('user clicks on comida button', async () => {
      await expect(page).toClick('Button',{text:"SOUVENIRS"});
      expect(page.url).toContain("/catalogo/recuerdo");

     delay(1000);

    });

    then('comida products are loaded from database and shown on page', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      
      expect(welcomePageText).toContain("Horreo hecho a mano");
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