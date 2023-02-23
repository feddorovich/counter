import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";

const App:React.FC = () => {

    let [counter, setCounter] = useState<number>(0)
    let [settings, setSettings] = useState(false)
    console.log(settings)
    let minValue = 0
    let maxValue = 5

    function addCount() {
        setCounter(counter + 1)
    }
    function resetCount() {
        setCounter(0)
    }
    function openSettings() {
        setSettings(!settings)
    }


    return (
        <div className="App">
            { settings ? <Settings openSettings={openSettings}/> :
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
