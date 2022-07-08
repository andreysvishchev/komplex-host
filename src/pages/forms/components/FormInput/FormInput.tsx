import React, {ChangeEvent, useState} from 'react';
import s from "../../Form.module.scss";


type PropsType = {
    caption: string
    placeholder?: string
    type?: string
    style?: any
    password?: boolean
    value?: string | number
}

const FormInput: React.FC<PropsType> = (props) => {

    const {caption, placeholder, type, style, password,} = props
    const [hidden, setHidden] = useState<boolean>(true)
    const [value, setValue] = useState(props.value)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        console.log(value)
    }

    const togglePassword = () => {
        setHidden(!hidden)
    }

    return (

        password
            ?
            <div className={s.input} style={style}>
                <div className={s.input__caption}>{caption}</div>
                <label className={s.input__password}>
                    <span onClick={togglePassword} className={hidden ? `${s.input__icon} ${s.hidden}` : s.input__icon}/>
                    <input  onChange={onChangeHandler}
                            value={value}
                            autoComplete={'off'}
                            type={hidden ? 'password' : 'text'}
                            className={s.input__field}
                            placeholder={placeholder}/>
                </label>
            </div>
            :
            <div className={s.input} style={style}>
                <div className={s.input__caption}>{caption}</div>
                <input className={s.input__field}
                       autoComplete={'off'}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChangeHandler}/>
            </div>

    )
        ;
};

export default FormInput;