import React, {useState} from 'react';
import s from '../Support.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../store/store";
import {ApplicationType,} from "../../../../store/supportReducer";
import MessageForm from "../assets/message-form/MessageForm";
import MessagesContainer from "./MessagesContainer";

type PropsType = {
    applications: ApplicationType[]
    id: number
}

const Chat = (props: PropsType) => {

    const filterApplications = props.applications.filter(el => el.id === props.id)
    const data = filterApplications[0]
    const [end, setEnd] = useState<boolean>(true)
    const dispatch = useDispatch<AppDispatchType>()










    return (
        <div className={s.chat}>
            <div className={s.chat__top}>
                <div className={end ? `${s.chat__head} ${s.end}` : s.chat__head}>
                    <div className={s.chat__title}>
                        Заявка №{data && `${data.number_app} ${data.title}`}
                    </div>
                    <div
                        className={data && data.status ? `${s.chat__status} ${s.open} ` : `${s.chat__status} ${s.close}`}>
                        {data && data.status ? 'Открыта' : 'Закрыта'}
                    </div>
                    <div className={s.chat__date}>24 августа</div>
                </div>
            </div>
           <MessagesContainer data={data} setEnd={setEnd}/>
            <div className={s.chat__bot}>
                <MessageForm/>
            </div>
        </div>
    );
};

export default Chat;