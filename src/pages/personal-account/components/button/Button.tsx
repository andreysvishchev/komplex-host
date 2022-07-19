import React from 'react';

import s from './Button.module.scss'
import loadSvg from '../../../../img/load-btn.svg'
import {Simulate} from "react-dom/test-utils";
import {useAppSelector} from "../../../../store/store";

type PropsType = {
    light?: boolean
    callBack?: () => void
    type: 'button' | 'submit'
    title: string
    disabled?: boolean
}

const Button = (props: PropsType) => {
    const loading = useAppSelector(state => state.app.loading)
    return (
        <> {
            props.light
                ?
                <button disabled={loading} type={props.type} className={loading ? `${s.button} ${s.light} ${s.loading}` : `${s.button} ${s.light}`}
                        onClick={props.callBack}>
                    {props.title}
                </button>
                :
                <button disabled={loading || props.disabled} type={props.type} className={loading ? `${s.button} ${s.loading}` : s.button}
                        onClick={props.callBack}>
                    {props.title}
                </button>

        }
        </>

    );
};

export default Button;