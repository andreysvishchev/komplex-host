import React, {ChangeEvent, useState} from 'react';
import s from "../../Form.module.scss";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../store/store";
import {captchaError, loginError} from "../../../../reducers/errorReducer";



type PropsType = {
    value?: string | number
    onBlur?: (e: any) => void
    onChange?: (e: React.ChangeEvent<any>) => void
    name?: string
    type?: string
    placeholder?: string
    style?: any
    password?: boolean
    caption: string
    error?: any
    errorText?: string
}

const FormInput: React.FC<PropsType> = (props) => {

    const {caption, placeholder, style, password, onChange, onBlur, error} = props
    const [hidden, setHidden] = useState<boolean>(true)

    const dispatch = useDispatch<AppDispatchType>()

    const togglePassword = () => {
        setHidden(!hidden)
    }

    const onChangeHandler = ( e: React.ChangeEvent<any>)=> {
        if (onChange) {
            onChange(e)
            dispatch(captchaError(false))
            dispatch(loginError(false))
        }
    }

    return (
        <div className={s.input} style={style}>
            <div className={s.input__caption}>{caption}</div>
            {password
                ?
                <label className={s.input__password}>
                        <span onClick={togglePassword}
                              className={hidden ? `${s.input__icon} ${s.hidden}` : s.input__icon}/>
                    <input onChange={onChange}
                           onBlur={onBlur}
                           value={props.value}
                           name={props.name}
                           autoComplete='off'
                           type={hidden ? 'password' : 'text'}
                           className={error ? `${s.error} ${s.input__field}` : s.input__field}
                           placeholder={placeholder}/>
                </label>
                :
                <input className={error ? `${s.error} ${s.input__field}` : s.input__field}
                       name={props.name}
                       value={props.value}
                       onChange={onChangeHandler}
                       onBlur={onBlur}
                       autoComplete={'off'}
                       placeholder={placeholder}/>
            }
            {props.error &&
            <div className={s.error}>{props.errorText}</div>
            }
        </div>
    );
};

export default FormInput;