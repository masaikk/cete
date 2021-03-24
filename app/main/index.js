const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const handleIPC=require('./ipc')
const {create:createMainWindow}=require('./windows/main')


app.on('ready', () => {

    createMainWindow()
    handleIPC()

})