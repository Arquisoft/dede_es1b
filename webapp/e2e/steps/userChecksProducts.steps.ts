import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/userChecksProducts.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  beforeAll(async () => {
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });

  test('User accesses to the webpage', ({given,when,then}) => {

    given('a user on welcome page', async () => {
      const welcomePageText = await page.evaluate(()=> document.body.textContent);
      expect(welcomePageText).toMatch("Bienvenido a AsturShop");
    });

    when('user accesses main page', async () => {
      await expect(page).toClick('a',{text:"Empezar"});
      expect(page.url).toContain("/inicio");

     /*  await delay{
        
      }) */
      await expect(page).toClick('button', { text: 'Accept' })
    });

    then('A confirmation message should be shown in the screen', async () => {
      await expect(page).toMatch('You have been registered in the system!')
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