// https://github.com/percy/cli/tree/master/packages/core#readme

import handler from 'serve-handler';
import http from 'http';
import puppeteer from 'puppeteer';
import mkdirp from 'mkdirp';
import path from 'path';
import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const PORT = 7890;
const SNAPSHOTS_FILE = './snapshots.json';
const PERCY_TOKEN = 'a7a4c5f9b410520b08757af3dda79f92c245286a598f29ce02253b3783f99f27'; // TODO: Get from .env
const PERCY_BRANCH = 'local'; // TODO: Get from .env
const HOST = `http://localhost:${PORT}`;
const PAGES = JSON.parse(readFileSync(SNAPSHOTS_FILE).toString());

// Create directory for storing screenshots
const session_name = (() => {
  const d = new Date();
  const h = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
  const s = d.getSeconds() > 9 ? d.getSeconds() : `0${d.getSeconds()}`;
  return `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}-${h}${d.getMinutes()}${s}`;
})();
const OUT_DIR = path.join('./vr-puppet-percy', session_name);
mkdirp(OUT_DIR);
console.log('Saving images to ', OUT_DIR);

console.time('Captured page-screenshots for visual regression testing');
(async () => {
  // Start webserver
  const server = await http
    .createServer((request, response) => {
      return handler(request, response, {
        directoryListing: true
      });
    })
    .listen(PORT, () => {
      console.log(`Serving at ${HOST}`);
    });

  // Start Puppeteer
  console.log(`Starting Puppeteer`);
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // TODO: Implement a range of viewports
  page.setViewport({ width: 1280, height: 2024 });

  /**
   * Capture Pages
   */

  const urls = await Promise.all(
    PAGES.map(async config => {
      const url = `${HOST}${config.url}`;
      console.log(`Capturing ${url}`);

      await page.goto(`${url}`, {
        waitUntil: 'networkidle2'
      });

      await page.screenshot({
        path: path.join(OUT_DIR, `/${config.name}.png`),
        omitBackground: true,
        fullPage: true
      });

      return url;
    })
  );

  console.log(`Capturing complete`, urls);

  await browser.close();
  server.close();

  console.timeEnd('Captured page-screenshots for visual regression testing');

  /**
   * Upload to Percy
   */

  // console.log(`PERCY_TOKEN=${PERCY_TOKEN} PERCY_BRANCH=${PERCY_BRANCH} npx percy upload "${OUT_DIR}"`);

  //  npx percy upload './vr-puppet-percy/211124-0824' -d -v
  execSync(`PERCY_TOKEN=${PERCY_TOKEN} PERCY_BRANCH=${PERCY_BRANCH} npx percy upload "${OUT_DIR}"`, {
    stdio: 'inherit'
  });
})();
