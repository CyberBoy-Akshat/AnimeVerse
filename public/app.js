const express = require('express');
const path = require('path');
const scraper = require('./scraper');
const proxyApp = require('./proxy');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/crunchyroll', proxyApp);

// Periodically scrape new content and update frontend data.json file
setInterval(async () => {
  const videoUrls = await scraper.scrapeVideoUrls();
  
}, process.env.SCRAPER_INTERVAL || '15m'); // Default to every hour

app.listen(3000);
