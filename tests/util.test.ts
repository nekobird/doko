// import { JSDOM } from 'jsdom';

// const doc = new JSDOM(`
// <!DOCTYPE html>
//   <div id="root">
//     <div class="node node_0">
//       <div class="node node_0_0">a</div>
//       <div class="node node_0_1">b</div>
//       <div class="node node_0_2">c</div>
//     </div>
//     <div class="node node_1">
//       <div class="node node_1_0">a</div>
//       <div class="node node_1_1">b</div>
//       <div class="node node_1_2">c</div>
//     </div>
//   </div>
// `);

// const document = doc;
// const window = doc.window;


// import {
//   isNodeListOfElement,
// } from '../lib/doko';

// test('isNodeListOfElement', () => {
//   const nodes = window.getElementsByClassName('node');

//   expect(isNodeListOfElement(nodes)).toBeTruthy();
// });

// import puppeteer from 'puppeteer';

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();


// })();

describe('Google', () => {
  let page;

  beforeAll(async () => {
    await page.goto('https://www.google.com');
  });

  it ('google', async () => {
    await expect(page).toMatch('google');
  });
});