import React, {ChangeEvent} from 'react';
import s from "../Input/Input.module.scss";

type PropsType = {
    caption: string
    placeholder: string
    type?: string
    value: string
    setValue: (value: string) => void
}

const EditableInput = (props: PropsType) => {

    const {caption, placeholder, type, value, setValue} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.input}>
            <div className={s.input__caption}>{caption}</div>
            <input onChange={onChangeHandler} type={type} className={s.input__field} placeholder={placeholder} value={value}/>
        </div>
    );
};

export default EditableInput;