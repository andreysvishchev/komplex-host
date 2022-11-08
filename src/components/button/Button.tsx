import React from 'react';
import s from './Button.module.scss'
import {useAppSelector} from "../../store/store";

type PropsType = {
    light?: boolean
    callBack?: () => void
    type: 'button' | 'submit'
    title: string
    disabled?: boolean
    style?: any
}

const Button = (props: PropsType) => {
    const loading = useAppSelector(state => state.app.loading)
    return (
        <> {
            props.light
                ?
                <button style={props.style}  disabled={loading} type={props.type} className={loading ? `${s.button} ${s.light} ${s.loading}` : `${s.button} ${s.light}`}
                        onClick={props.callBack}>
                    {props.title}
                </button>
                :
                <button style={props.style} disabled={loading || props.disabled} type={props.type} className={loading ? `${s.button} ${s.loading}` : s.button}
                        onClick={props.callBack}>
                    {props.title}
                </button>
        }
        </>

    );
};

export default Button;