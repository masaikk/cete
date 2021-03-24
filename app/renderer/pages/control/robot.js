const {ipcMain}=require('electron')

function handleMouse(data){
    let x=data.clientX
}

module.exports =function () {
    ipcMain.on('robot',(e,type,data)=>{
        if(type==='mouse'){
            handleMouse(data)
        }else if(type==='keyboard'){
            handleKey(data)
        }
    })
}