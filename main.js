const { app, BrowserWindow, ipcMain, dialog, globalShortcut, Menu, MenuItem, webContents } = require('electron')
const path = require('path')

function createWindow() {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            spellcheck: true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

let openOptions = {
    title: "Select a txt file",
    buttonLabel: "Edit this file",
    filters: [
        { name: 'Txt Files', extensions: ['txt'] },
    ],
    properties: ['openFile']
}

ipcMain.on('openFile', (event) => {
    dialog.showOpenDialog(openOptions).then(result => {
        if (result.canceled) {} else {
            event.reply('filePath', result.filePaths)
        }
    }).catch(err => {
        console.log(err)
    })
})

let saveOptions = {
    title: "Create a txt file",
    buttonLabel: "Create",
    filters: [
        { name: 'Txt Files', extensions: ['txt'] },
    ],
    properties: ['saveFile']
}

ipcMain.on('saveFile', (event) => {
    dialog.showSaveDialog(saveOptions).then(result => {
        if (result.canceled) {} else {
            event.reply('filePath', result.filePath)
        }
    }).catch(err => {
        console.log(err)
    })

})

ipcMain.on('newWindow', (event) => {
    createWindow();
})

ipcMain.on('fullscreen', (event) => {
    win.setFullScreen(true)
})