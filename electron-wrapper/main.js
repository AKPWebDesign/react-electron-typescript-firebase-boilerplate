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
  live: 'https://react-electron-firebase.firebaseapp.com',
};

if (argv.dev) {
  require('electron-debug')({ // eslint-disable-line global-require
    showDevTools: 'undocked',
    enabled: true,
  });
}

function createWindow() {
  if (argv.dev) {
    // eslint-disable-next-line global-require
    const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));
  }

  // Create the browser window.
  const win = new BrowserWindow({ width: 1600, height: 900 });

  const winURL = argv.dev ? urls.dev : urls.live;

  // and load the URL of the app.
  win.loadURL(winURL);
}

app.on('ready', createWindow);
