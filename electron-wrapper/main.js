/**
 * This is an incredibly basic electron script, with the sole purpose of loading
 * either the development or live site within a browser window. Consider it your
 * starting point for adding all sorts of fun electron goodies.
 */
const { app, BrowserWindow } = require('electron');
const { argv } = require('yargs');

const urls = {
  dev: 'http://localhost:3000',

  // replace with your firebase app URL (or whatever else you might be using)
  live: 'https://my-fancy-app.firebaseapp.com',
};

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 1600, height: 900 });

  const winURL = argv.dev ? urls.dev : urls.live;

  // and load the index.html of the app.
  win.loadURL(winURL);
}

app.on('ready', createWindow);
