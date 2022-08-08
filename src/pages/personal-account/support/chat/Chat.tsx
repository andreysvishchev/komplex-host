import React, {useEffect, useState} from 'react';
import s from '../Support.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ApplicationType,} from "../../../../reducers/supportReducer";
import MessageForm from "../assets/message-form/MessageForm";
import Message from "./Message";

type PropsType = {
    applications: ApplicationType[]
    id: string
}

const Chat = React.memo((props: PropsType) => {


    const [end, setEnd] = useState<boolean>(true)
    const messages = useSelector<AppStateType, ApplicationType[]>(state => state.support)
    const list = document.getElementById('messages')


    const arr = props.applications.filter(el => el.id === props.id)

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

    }, [])


    return (
        <div className={s.chat}>

            <div className={s.chat__top}>
                <div className={end ? `${s.chat__head} ${s.end}` : s.chat__head}>
                    <div className={s.chat__title}>Заявка №2452 Как оплатить аренду стойки Как оплатить аренду стойки Как оплатить аренду стойки Как оплатить аренду стойки Как оплатить аренду стойки</div>
                    <div className={s.chat__status}>Открыта</div>
                    <div className={s.chat__date}>24 августа</div>
                </div>
            </div>

            <div id='messages' className={s.chat__messages}>
                {arr[0].messages.map(el => {
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