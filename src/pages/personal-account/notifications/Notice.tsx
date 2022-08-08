import React from 'react';
import s from '../PersonalAccount.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../store/store";
import {NoticeType, readNoticeAC} from "../../../reducers/noticeReducer";
import NoticeAccordion from "../../components/accordions/NoticeAccordion";
import Button from "../../components/button/Button";
import Tooltip from "../../components/tooltip/Tooltip";

const Notice = () => {
    const notice = useSelector<AppStateType, NoticeType[]>(state => state.notice)
    const dispatch = useDispatch<AppDispatchType>()
    const readNotice = (noticeId:number)=> {
        dispatch(readNoticeAC(noticeId))
    }

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Уведомления</div>
                    <Tooltip/>
                </div>
             <Button type={'button'} title={'Прочитать всё'}/>
            </div>
            <div className={s.notices}>
                {
                        notice.map((el, i) => {
                            return (
                                <NoticeAccordion key={el.id}
                                                 title={el.title}
                                                 date={el.date}
                                                 text={el.text}
                                                 unread={el.unread}
                                                 readNotice={()=>readNotice(el.id)}
                                />
                            )
                        })
                }
            </div>
            <button className={s.show}>Развернуть все уведомления</button>
        </div>
    );
};

export default Notice;