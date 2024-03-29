 import React, {useEffect, useRef, useState} from 'react';
import s from '../Support.module.scss'
import Tooltip from "../../../../components/tooltip/Tooltip";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../store/store";
import {ApplicationType} from "../../../../store/supportReducer";
import Application from "./application";
import ChatSearch from "../assets/chat-search/ChatSearch";

type PropsType = {
    applications: ApplicationType[]
    setId: (id: number) => void
    curApp: number
}

const Applications = React.memo((props: PropsType) => {
    const length = props.applications.length
    const dispatch = useDispatch<AppDispatchType>()
    const [end, setEnd] = useState(false)
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>

    const onScrollHandler = (e: React.SyntheticEvent) => {
        const a = Math.round(e.currentTarget.scrollHeight - e.currentTarget.scrollTop)
        const b = e.currentTarget.clientHeight
        if (Math.round(e.currentTarget.scrollHeight - e.currentTarget.scrollTop) < e.currentTarget.clientHeight + 50) {
            setEnd(true)
        } else {
            setEnd(false)
        }
    }

    return (
        <div className={end ? `${s.applications} ${s.end}` : s.applications}>
            <div className={s.applications__top}>
                <div className={s.applications__head}>
                    <div className={s.applications__title}>Заявки</div>
                    <Tooltip/>
                    {
                        length !== 0 &&
                        <button type={'button'} className={s.applications__button}>Создать
                            заявку
                        </button>
                    }
                </div>
                {
                    length !== 0 &&
                    <ChatSearch/>
                }
                {
                    length !== 0 &&
                    <div className={s.sort}>
                        <div className={s.sort__caption}>Сортировка по:</div>
                        <button className={s.sort__btn}>Дате</button>
                        <button className={s.sort__btn}>Названию</button>
                    </div>
                }
            </div>

            <div ref={ref} onScroll={onScrollHandler}
                 className={s.applications__list}>
                {length !== 0 ?
                    props.applications.map(el => {
                        return (
                            <Application
                                curApp={props.curApp}
                                setId={props.setId}
                                key={el.id}
                                data={el}/>
                        )
                    })
                    :
                    <div className={s.applications__null}>Нет новых заявок</div>
                }
            </div>
        </div>
    );
});

export default Applications;