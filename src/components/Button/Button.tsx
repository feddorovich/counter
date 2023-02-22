import React from 'react';

type PropsType = {
    title: string
    callback: () => void
}

export const Button: React.FC<PropsType> = (props) => {

    const onClickHandler = () => {
      props.callback()
    }

    return (
            <button onClick={onClickHandler}>{props.title}</button>
    );
};