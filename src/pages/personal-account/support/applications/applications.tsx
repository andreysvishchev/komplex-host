import React, {useEffect, useState} from 'react';
import s from '../Support.module.scss'
import Tooltip from "../../components/tooltip/Tooltip";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../store/store";
import {ApplicationType} from "../../../../reducers/supportReducer";
import Application from "./application";
import ChatSearch from "../chat-search/ChatSearch";

type PropsType = {
    applications: ApplicationType[]
    setId: (id: string) => void
}

const Applications = React.memo((props: PropsType) => {

    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {

    }, [])


    const [end, setEnd] = useState(false)

    const list = document.getElementById('scroll')
    if (list) {
        list.addEventListener('scroll', function () {
            if (this.scrollHeight - this.scrollTop === this.clientHeight) {
                setEnd(true)
            } else {
                setEnd(false)
            }
        })
    }

    return (
        <div className={end ? `${s.applications} ${s.end}` : s.applications}>
            <div className={s.applications__top}>
                <div className={s.applications__head}>
                    <div className={s.applications__title}>Заявки</div>
                    <Tooltip/>
                    <button type={'button'} className={s.applications__button}>Создать заявку</button>
                </div>
                <ChatSearch/>
                <div className={s.sort}>
                    <div className={s.sort__caption}>Сортировка по:</div>
                    <button className={s.sort__btn}>Дате</button>
                    <button className={s.sort__btn}>Названию</button>
                </div>
            </div>

            <div className={s.applications__list} id='scroll'>
                {props.applications.map(el => {
                    return (
                        <Application
                            setId={props.setId}
                            key={el.id}
                                     data={el}/>
                    )
                })}
            </div>
        </div>
    );
});

export default Applications;