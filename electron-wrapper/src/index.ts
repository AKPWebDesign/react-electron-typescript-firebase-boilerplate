/**
 * This is a fairly basic electron script, with the sole purpose of loading
 * either the development or live site within a browser window. Consider it your
 * starting point for adding all sorts of fun electron goodies.
 */
import { app, autoUpdater, BrowserWindow, dialog, ipcMain, globalShortcut } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import * as isDev from 'electron-is-dev';
import { argv } from 'yargs';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // tslint:disable-line no-var-requires
  app.quit();
}

// auto-update functionality
if (!isDev) {
  const server = 'https://nuts-react-electron-typescript.herokuapp.com';
  const feed = `${server}/update/${process.platform}/${app.getVersion()}`;
  autoUpdater.setFeedURL(feed);
  autoUpdater.checkForUpdates();

  setInterval(() => {
    autoUpdater.checkForUpdates();
  }, 300000); // check for updates every 5 minutes or so
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null;

const urls = {
  dev: 'http://localhost:3000',

  // replace with your firebase app URL (or whatever else you might be using)
  live: 'https://react-electron-firebase.firebaseapp.com',
};

if (argv.dev) {
  require('electron-debug')({ // tslint:disable-line no-var-requires
    showDevTools: 'undocked',
    enabled: true,
  });
}

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the URL of the app.
  const winURL = argv.dev ? urls.dev : urls.live;
  mainWindow.loadURL(winURL);

  if (argv.dev) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    await installExtension(REDUX_DEVTOOLS);
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // sends the current electron version to the web client.
  ipcMain.on('electron-version', (event: any) => {
    event.returnValue = process.versions.electron;
  });

  // initialize global shortcuts
  /* tslint:disable no-unused-expression */
  globalShortcut.register('CmdOrCtrl+Shift+Plus', () => {
    mainWindow && mainWindow.webContents.send('accelerator-plus');
  });
  globalShortcut.register('CmdOrCtrl+Shift+-', () => {
    mainWindow && mainWindow.webContents.send('accelerator-minus');
  });
  globalShortcut.register('CmdOrCtrl+Shift+R', () => {
    mainWindow && mainWindow.webContents.send('accelerator-reset');
  });
  /* tslint:enable */
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// unregister all global shortcuts
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.',
  };

  dialog.showMessageBox(dialogOpts, (response) => {
    if (response === 0) {
      autoUpdater.quitAndInstall();
    }
  });
});

autoUpdater.on('error', message => {
  console.error('There was a problem updating the application');
  console.error(message);
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
