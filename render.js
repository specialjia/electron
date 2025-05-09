function sendMessag() {
    window.electronAPI.sendMessage('hello from renderer');
}

window.electronAPI.onMessage((msg) => {
    alert('Got message from main process: ' + msg);
});
