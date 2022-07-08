import React from 'react';
import s from '../Support.module.scss'
import {MessageType} from "../../../../reducers/supportReducer";


type PropsType = {
    data: MessageType
}
const Message = (props: PropsType) => {

    return (
        <div className={props.data.my ? `${s.message} ${s.my}` : `${s.message} ${s.sup}`}>
            <div className={s.message__author}>{props.data.my ? 'Вы' : 'Техподдержка'}</div>
            <div className={props.data.my ? `${s.message__body} ${s.my}` : `${s.message__body} ${s.sup}`}>
                <div className={s.message__text}>{props.data.text}</div>
                <div className={s.message__date}>{props.data.time}</div>
            </div>
        </div>
    );
};

export default Message;