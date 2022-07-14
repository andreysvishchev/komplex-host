import React from 'react';

import s from './Button.module.scss'
import loadSvg from '../../../../img/load-btn.svg'
import {Simulate} from "react-dom/test-utils";
import {useAppSelector} from "../../../../store/store";

type PropsType = {
    callBack?: () => void
    type: 'button' | 'submit'
    title: string
}

const Button = (props: PropsType) => {
    const loading = useAppSelector(state => state.app.loading)
    return (
        <button disabled={loading} type={props.type} className={loading ? `${s.button} ${s.loading}` : s.button} onClick={props.callBack}>
            {props.title}
        </button>
    );
};

export default Button;