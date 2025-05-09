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
   
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

 ipcMain.on('msg-from-renderer', (event, msg) => {
    console.log('Received from renderer:', msg);
    //event 是IpcMainEvent 对象
    //event.sender 相当于发来信息的那个窗口的webContents对象
    //event.sender.send() 发送消息给渲染进程
    event.sender.send('msg-from-main', 'Hello from main process!');
});
