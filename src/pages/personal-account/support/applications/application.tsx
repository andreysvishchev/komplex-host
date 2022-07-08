import React, {useContext} from 'react';
import s from '../Support.module.scss'
import {ApplicationType, getApplicationMessages, MessageType} from "../../../../reducers/supportReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";

type PropsType = {
    data: ApplicationType
}

const Application = (props: PropsType) => {
    const {id, title, lastMessage, created_date, status, read} = props.data
    const messages = useSelector<AppStateType, MessageType[]>(state => state.support.messages)
    const dispatch = useDispatch()

    const callback = () => {

        dispatch(getApplicationMessages(id))
    }

    return (
        <div onClick={callback} className={s.application} id={id}>
            <div className={read ? `${s.application__top} ${s.not}` : s.application__top}>
                <div className={s.application__title}>{title}</div>
                <span className={status === 'open' ? `${s.application__status} ${s.open}` :
                    `${s.application__status} ${s.close}`}>
                    {status === 'open' ? 'Открыта' : 'Закрыта'}</span>
            </div>
            <div className={s.application__message}>{lastMessage}</div>
            <div className={s.application__date}>{created_date}</div>
        </div>
    );
};

export default Application;