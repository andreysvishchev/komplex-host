import React, {useEffect, useRef, useState} from 'react';
import s from "../Support.module.scss";
import Message from "./Message";
import {ApplicationType} from "../../../../store/supportReducer";

type PropsType = {
    data: ApplicationType
    setEnd: (end: boolean) => void
}
const MessagesContainer = (props: PropsType) => {
    const [autoScroll, setAutoScroll] = useState(true)
    console.log(autoScroll)
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const messagesList = useRef() as React.MutableRefObject<HTMLDivElement>

     function scrollToBottom(type: 'smooth' | 'auto' = 'auto') {
               ref.current.scrollIntoView({
                   behavior: type || 'auto',
                   block: 'end',

               })
     }


    useEffect(() => {
    /*    const el = messagesList.current
        if (autoScroll) {
            el.scrollTop = el.scrollHeight - el.clientHeight;
        }*/
        if(autoScroll) {
            scrollToBottom()
        }


    }, [props.data])

    const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const el = e.currentTarget
        const a = el.scrollHeight - el.scrollTop
        const b = el.clientHeight
        if (Math.round(el.scrollHeight - el.scrollTop) > el.clientHeight + 50) {
            setAutoScroll(false)
        } else {
            setAutoScroll(true)

        }
        el.scrollTop === 0 ? props.setEnd(false) : props.setEnd(true)
        console.log(autoScroll)
        console.log(a, b + 50)
    }


    return (
        <div onScroll={onScrollHandler} ref={messagesList} className={s.chat__messages}>
            {props.data &&
            props.data.messages.map(el => <Message data={el} key={el.id}/>)
            }
            <div ref={ref}/>
        </div>
    );
};

export default MessagesContainer;