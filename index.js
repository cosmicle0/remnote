const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800
  });
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile('./src/index.html');

  mainWindow.on('closed', function() {
    mainWindow: null
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
