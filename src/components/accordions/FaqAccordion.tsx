import React, {MutableRefObject, useState} from 'react';
import s from './Accordion.module.scss'


type PropsType = {
    title: string
    text: string
    img?: string[]
}

const FaqAccordion = (props: PropsType) => {

    let [open, setOpen] = useState(false)

    const myRef = React.useRef() as MutableRefObject<HTMLParagraphElement>


    const toggle = () => {
        setOpen(!open)
        if (!open) {
            myRef.current.style.maxHeight = myRef.current.scrollHeight + 'px'
        } else {
            myRef.current.style.maxHeight = '0'
        }
    }

    return (
        <div className={s.quest} onClick={toggle}>
            <div className={ open ? `${s.isOpen} ${s.quest__title}` : s.quest__title}>{props.title}</div>
            <div ref={myRef} className={ open ? `${s.isOpen} ${s.quest__text}` : s.quest__text}>
                {props.text}
            </div>

        </div>
    );
};

export default FaqAccordion;