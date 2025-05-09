const {app, BrowserWindow, ipcMain} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + '/preload.js',
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    win.loadFile('render.html');
    ipcMain.on('msg-from-renderer', (event, msg) => {
    console.log('Received from renderer:', msg);
    win.webContents.send('msg-from-main', 'Hello from main process!');
});
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


