const {app, BrowserWindow, ipcMain} = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });

    const urlLocation = isDev ? 'http://localhost:3000' :  'dummyurl';

    mainWindow.loadURL(urlLocation);

});