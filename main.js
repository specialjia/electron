import path from 'path';
import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 当前模块的绝对文件路径
const __filename = fileURLToPath(import.meta.url);
// 当前模块所在目录
const __dirname = dirname(__filename);

console.log(__dirname);

// let mainWindow;
// console.log('App is run');
app.on('ready', () => {
    console.log('App is ready');
   const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    mainWindow.webContents.openDevTools();
    const urlLocation = isDev
    ? 'http://localhost:3000'
    : path.join(__dirname, './build/index.html');
    console.log('urlLocation', path.join(__dirname, './build/index.html'));
   
    mainWindow.loadURL(urlLocation);
   

});