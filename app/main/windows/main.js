const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')


let win=null;
function create() {


    win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
            //This can hold it
            // preload: __dirname + '/preload.js'
        }
    })


    if (isDev) {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/index.html'))
    }


}
function send(channel,...args){
    win.webContents.send(channel,...args)
}
module.exports={create,send}