const {app,BrowerWindow}=require('electron')

app.on('ready',()=>{
    win=new BrowerWindow({
        width:600,
        height:300,
        webPreferences:{
            nodeIntegration:true,

        }
    })
})