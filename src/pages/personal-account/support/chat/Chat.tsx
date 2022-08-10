import React, {useCallback, useEffect, useState} from 'react';
import s from '../Support.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ApplicationType,} from "../../../../reducers/supportReducer";
import MessageForm from "../assets/message-form/MessageForm";
import Message from "./Message";
import {authReducer} from "../../../../reducers/authReducer";

type PropsType = {
    applications: ApplicationType[]
    id: string
}

const Chat = React.memo((props: PropsType) => {

    const dispatch = useDispatch<AppDispatchType>()
    const [end, setEnd] = useState<boolean>(true)
    const messages = useSelector<AppStateType, ApplicationType[]>(state => state.support)
    const arr = props.applications.filter(el => el.id === props.id)
    const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>
    const [autoScroll, setAutoScroll] = useState(true)


    useEffect(() => {
        if (autoScroll) {
            ref.current?.scrollIntoView({behavior: "smooth"})
        }

    }, [messages])


    const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        console.log(autoScroll)
        const el = e.currentTarget
        el.scrollTop === 0 ? setEnd(false) : setEnd(true)
        // ????
        if(Math.abs((el.scrollHeight - el.scrollHeight) - el.clientHeight) < 100) {
            setAutoScroll(true)
        } else {
            setAutoScroll(false)
        }

    }


    return (
        <div className={s.chat}>
            <div className={s.chat__top}>
                <div className={end ? `${s.chat__head} ${s.end}` : s.chat__head}>
                    <div className={s.chat__title}>
                        Заявка №{arr[0] ? arr[0].number_app : ''}
                    </div>
                    <div className={s.chat__status}>{arr[0] ? arr[0].status : ''}</div>
                    <div className={s.chat__date}>24 августа</div>
                </div>
            </div>

            <div onScroll={onScrollHandler} className={s.chat__messages}>
                {arr[0] &&
                arr[0].messages.map(el => {
                    return (
                        <Message data={el} key={el.id}/>
                    )
                })
                }
                <div ref={ref}/>
            </div>
            <div className={s.chat__bot}>
                <MessageForm/>
            </div>
        </div>
    );
});

export default Chat;