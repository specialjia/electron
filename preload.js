const { contextBridge, ipcRenderer } = require('electron');

// 安全暴露 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (msg) => ipcRenderer.send('msg-from-renderer', msg),
  onMessage: (callback) => ipcRenderer.on('msg-from-main', (event, arg) => callback(arg))
});
