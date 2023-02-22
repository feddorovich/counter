import React from 'react';
import s from './Button.module.css'

type PropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

export const Button: React.FC<PropsType> = (props) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button
                className={s.button}
                onClick={onClickHandler}
                disabled={props.disabled}>
                {props.title}
            </button>
        </div>
    );
};