import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";

function App() {

    let [counter, setCounter] = useState<number>(0)

    function addCount() {
        setCounter(counter + 1)
    }
    function resetCount() {
        setCounter(0)
    }

  return (
    <div className="App">
        <div className={'counter'}>
            <div className={'numArea'}>{counter}</div>
            <div className={'buttoms'}>
                <Button title={'inc'} callback={addCount}/>
                <Button title={'reset'} callback={resetCount}/>
            </div>
        </div>
    </div>
  );
}

export default App;
