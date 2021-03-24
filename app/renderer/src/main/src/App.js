import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

const {ipcRenderer} = window.require('electron')



function App() {

    const [remoteCode,setRemoteCode]=useState('');
    const [localCode,setLocalCode]=useState('');
    const [controlText,setControlText]=useState('');
    const login=async ()=>{
        let code=await ipcRenderer.invoke('login')
        setLocalCode(code)
    }

    useEffect(()=>{
        login();
        ipcRenderer.on('control-state-change',handleControlState)
        return ()=>{
            ipcRenderer.removeListener('control-state-change',handleControlState)
        }
    },[])

    const startControl=(remoteCode)=>{
        ipcRenderer.send('control',remoteCode)
    }

    const handleControlState=(e,name,type)=>{
        let text='';
        if(type===1){
            text=`controlling remote ${name} now`
        }else if(type===2){
            text=`being controlled by ${name}`
        }
        setControlText(text)
    }

    return (
        <div className="App">

            {
                controlText===''?<>
                    <div>Your code:{localCode}</div>
                    <input type='text' value={remoteCode} onChange={e => setRemoteCode(e.target.value)}/>
                    <button onClick={()=>startControl(remoteCode)}>ready</button>
                </> :<div>{controlText}</div>
            }



        </div>
    );
}

export default App;
