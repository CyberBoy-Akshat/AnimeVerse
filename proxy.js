const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/crunchyroll/', createProxyMiddleware({
  target: 'https://cdn.crunchyroll.com',
  changeOrigin: true,
}));

module.exports = app;
