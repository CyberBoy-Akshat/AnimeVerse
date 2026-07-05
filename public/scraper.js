const axios = require('axios');
const puppeteer = require('puppeteer');

async function scrapeVideoUrls() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.crunchyroll.com/videos/anime');
  
  // Extract video URLs from search results
  const videoUrls = await page.$$eval('.portrait', elements => {
 return elements.map(element => element.getAttribute('href'));
  });
  
  await browser.close();
  
  return videoUrls;
}

module.exports = scrapeVideoUrls;
