import React, {MutableRefObject, useState} from 'react';
import s from './Accordion.module.scss'

type PropsType = {
    unread: boolean
    title: string
    date: string
    text: string
    readNotice: ()=> void
}

const NoticeAccordion = (props: PropsType) => {

    let [open, setOpen] = useState(false)

    const myRef = React.useRef() as MutableRefObject<HTMLParagraphElement>

    const toggle = () => {
        props.readNotice()
        setOpen(!open)
        if (!open) {
            myRef.current.style.maxHeight = myRef.current.scrollHeight + 'px'
        } else {
            myRef.current.style.maxHeight = '0'
        }
    }

    return (
        <div className={s.notice} onClick={toggle}>
            <div className={props.unread ? `${s.notice__headline} ${s.unread}` : s.notice__headline}>
                <div className={s.notice__title}>{props.title}</div>
                <div className={s.notice__date}>{props.date}</div>
            </div>
            <div ref={myRef} className={open ? `${s.notice__text} ${s.isOpen}` : s.notice__text}>{props.text}</div>
        </div>
    );
};

export default NoticeAccordion;