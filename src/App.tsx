import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";

function App() {

    let [counter, setCounter] = useState<number>(0)
    let [settings, setSettings] = useState(false)
    let minValue = 0
    let maxValue = 5

    function addCount() {
        setCounter(counter + 1)
    }
    function resetCount() {
        setCounter(0)
    }


    return (
        <div className="App">
            { settings ? <Settings/> :
            <div className={'counter'}>
                <div className={counter===maxValue ? 'numArea' + ' ' + 'maxValue' : 'numArea'}>{counter}</div>
                <div className={'buttoms'}>
                    <Button title={'inc'} callback={addCount} disabled={counter===maxValue}/>
                    <Button title={'reset'} callback={resetCount} disabled={counter===minValue}/>
                    <Button title={'set'} callback={()=>{setSettings(true)}}/>
                </div>
            </div>
            }
        </div>
    );
}

export default App;
