import React, {ChangeEvent} from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'

type SettingsPropsType = {
    openSettings: () => void
    maxValue: any
    setMaxValue: (max: any) => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {

    const onClickHandler = () => {
        props.openSettings()
    }
    const onMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.value)
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