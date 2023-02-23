import React from 'react';
import {Button} from "../Button/Button";
import s from './Settings.module.css'

type SettingsPropsType = {
    openSettings: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {

    const onClickHandler = () => {
        props.openSettings()
    }

    return (
        <div>
            <div className={s.settings}>
                <div className={s.setArea}>
                    <table>
                        <tbody>
                        <tr>
                            <td>max value:</td>
                            <td><input className={s.input} type="number"/></td>
                        </tr>
                        <tr>
                            <td>start value:</td>
                            <td><input className={s.input} type="number"/></td>
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