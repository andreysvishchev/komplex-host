import React from 'react';
import s from '../Support.module.scss'
import {ApplicationType} from "../../../../reducers/supportReducer";
import {useDispatch} from "react-redux";

type PropsType = {
    data: ApplicationType
    setId: (id: number) => void
    curApp: number
}

const Application = (props: PropsType) => {
    const {id, title, last_message, created_date, status, read} = props.data

    const dispatch = useDispatch()

    const callback = () => {
        props.setId(id)
    }

    return (
        <div onClick={callback}
             className={props.curApp === id ? `${s.application} ${s.active}` : s.application}>
            <div
                className={!read ? `${s.application__top} ${s.not}` : s.application__top}>
                <div className={s.application__title}>{title}</div>
                <span className={status ? `${s.application__status} ${s.open}` :
                    `${s.application__status} ${s.close}`}>
                    {status ? 'Открыта' : 'Закрыта'}</span>
            </div>
            <div className={s.application__message}>{last_message}</div>
            <div className={s.application__date}>{created_date}</div>
        </div>
    );
};

export default Application;