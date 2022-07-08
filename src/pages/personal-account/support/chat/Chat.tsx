import React, {useContext, useEffect, useRef, useState} from 'react';
import s from '../Support.module.scss'
import Tooltip from "../../components/tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ApplicationType, fetchApplications, fetchMessages, MessageType} from "../../../../reducers/supportReducer";
import Message from "./Message";
import message from "./Message";
import MessageForm from "../../components/message-form/MessageForm";

type PropsType = {}

const Chat = React.memo((props: PropsType) => {
    const [end, setEnd] = useState<boolean>(true)
    const messages = useSelector<AppStateType, MessageType[]>(state => state.support.messages)
    const list = document.getElementById('messages')


    useEffect(() => {
        if (list) {
            list.scrollTop = list.scrollHeight
        }
    }, [messages])

    if (list) {
        list.addEventListener('scroll', function () {
            if (this.scrollTop === 0) {
                setEnd(false)
            } else {
                setEnd(true)
            }
        })
    }

    const dispatch = useDispatch<AppDispatchType>()
    useEffect(() => {
        dispatch(fetchMessages())
    }, [])


    return (
        <div className={s.chat}>

            <div className={s.chat__top}>
                <div className={end ? `${s.chat__head} ${s.end}` : s.chat__head}>
                    <div className={s.chat__title}>Заявка №2452 Как оплатить аренду стойки</div>
                    <div className={s.chat__status}>Открыта</div>
                    <div className={s.chat__date}>24 августа</div>
                </div>
            </div>

            <div id='messages' className={s.chat__messages}>
                {messages.map(el => {
                    return (
                        <Message data={el} key={el.id}/>
                    )
                })}
            </div>
            <div className={s.chat__bot}>
                <MessageForm/>
            </div>
        </div>
    );
});

export default Chat;