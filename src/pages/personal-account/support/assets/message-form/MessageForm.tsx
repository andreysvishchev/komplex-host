import React, {ChangeEvent, useRef, useState} from 'react';
import s from './MessageForm.module.scss'
import TextareaAutosize from 'react-textarea-autosize';
import ChatFile from "../chat-file/ChatFile";


const MessageForm = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <form className={s.form}>
            <ChatFile title={false}/>
            <TextareaAutosize value={value} onChange={onChangeHandler}
                              placeholder={'Напишите сообщение'}
                              className={s.form__textarea} minRows={2} maxRows={5}/>
            <button className={s.form__btn}>Отправить</button>
        </form>
    );
};

export default MessageForm;