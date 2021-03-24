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
        win.loadFile(path.resolve(__dirname, '../../renderer/pages/control/testGetDeskStream.html'))

}
module.exports={create}