import React, {ChangeEvent} from 'react';
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

    const onClickHandler = () => {
        props.setCounter(Number(props.minValue))
        props.openSettings()
    }
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const onMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }
    return (
        <div>
            <div className={s.settings}>
                <div className={s.setArea}>
                    <table>
                        <tbody>
                        <tr>
                            <td>max value:</td>
                            <td><input className={s.input}
                                       value={props.maxValue}
                                       onChange={onMaxChangeHandler}
                                       type="number"/></td>
                        </tr>
                        <tr>
                            <td>start value:</td>
                            <td><input className={s.input}
                                       value={props.minValue}
                                       onChange={onMinChangeHandler}
                                       type="number"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'buttoms'}>
                    <Button title={'set'} callback={onClickHandler}/>
                </div>
            </div>
        </div>
    );
};