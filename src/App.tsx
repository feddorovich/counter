import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {

    let [counter, setCounter] = useState<number>(0)
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
            <div className={counter===maxValue ? 'counter' + ' ' + 'maxValue' : 'counter'}>
                <div className={'numArea'}>{counter}</div>
                <div className={'buttoms'}>
                    <Button title={'inc'} callback={addCount} disabled={counter===maxValue}/>
                    <Button title={'reset'} callback={resetCount} disabled={counter===minValue}/>
                    <Button title={'set'} callback={resetCount} disabled={counter===minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
