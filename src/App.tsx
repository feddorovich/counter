import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";

const App:React.FC = () => {

    let [counter, setCounter] = useState<number>(0)
    let [settings, setSettings] = useState(false)
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)
    let [error, setError] = useState(false)


    function addCount() {
        if (counter < maxValue) {
            setError(false)
            setCounter(counter + 1)
        } else {
            setError(true)
        }

    }
    function resetCount() {
        setError(false)
        setCounter(0)
    }
    function openSettings() {
        setError(false)
        setSettings(!settings)
    }

    return (
        <div className="App">
            { settings ? <Settings openSettings={openSettings}
                                   setCounter={setCounter}
                                   maxValue={maxValue}
                                   setMaxValue={setMaxValue}
                                   minValue={minValue}
                                   setMinValue={setMinValue}
                /> :
            <div className={'counter'}>
                <div className={error ? 'numArea' + ' ' + 'maxValue' : 'numArea'}>{counter}</div>
                <div className={'buttoms'}>
                    <Button title={'inc'} callback={addCount} disabled={error}/>
                    <Button title={'reset'} callback={resetCount} disabled={counter===minValue}/>
                    <Button title={'set'} callback={()=>{setSettings(true)}}/>
                </div>
            </div>
            }
        </div>
    );
}

export default App;
