import React, {ChangeEvent, useRef, useState} from 'react';
import s from './MessageForm.module.scss'

import Input from "@mui/material/Input";
import styled from "@mui/material/styles/styled";
import TextareaAutosize from 'react-textarea-autosize';


const MessageForm = () => {
    const [value, setValue] = useState('')
    const Input = styled('input')({
        display: 'none',
    });
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <form className={s.form}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file"/>
                <span className={s.form__file}/>
            </label>
            <TextareaAutosize value={value} onChange={onChangeHandler} className={s.form__textarea} minRows={2} maxRows={5} />
            <button className={s.form__btn}>Отправить</button>
        </form>
    );
};

export default MessageForm;