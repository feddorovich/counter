import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'

type SettingsPropsType = {
    openSettings: () => void
    setCounter: (counter: number) => void
    maxValue: number
    setMaxValue: (max: number) => void
    minValue: number
    setMinValue: (min: number) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {

    let [error, setError] = useState(false)

    const onSetClickHandler = () => {
        props.setCounter(+props.minValue)
        props.openSettings()
    }
    const onResetClickHandler = () => {
        props.setMaxValue(5)
        props.setMinValue(0)
    }
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value < props.minValue) {
            setError(true)
        } else {
            setError(false)
            props.setMaxValue(+e.currentTarget.value)
        }
    }
    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value === props.maxValue || +e.currentTarget.value < 0) {
            if (+e.currentTarget.value >= props.maxValue) props.setMinValue(+e.currentTarget.value)
            setError(true)
        }
        if (+e.currentTarget.value < props.maxValue && +e.currentTarget.value >= 0) {
            setError(false)
            props.setMinValue(Number(e.currentTarget.value))
        }
    }

    return (
        <div>
            <div className={s.settings}>
                <div className={s.setArea}>
                    <table>
                        <tbody>
                        <tr>
                            <td>max value:</td>
                            <td><input className={error ? s.input + ' ' + s.inputError : s.input}
                                       value={props.maxValue}
                                       onChange={onMaxChangeHandler}
                                       type="number"/></td>
                        </tr>
                        <tr>
                            <td>start value:</td>
                            <td><input className={error ? s.input + ' ' + s.inputError : s.input}
                                       value={props.minValue}
                                       onChange={onMinChangeHandler}
                                       type="number"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'buttoms'}>
                    <Button title={'set'} callback={onSetClickHandler}/>
                    <Button title={'reset'}
                            callback={onResetClickHandler}
                            disabled={props.maxValue === 5 && props.minValue === 0}
                    />
                </div>
            </div>
        </div>
    );
};