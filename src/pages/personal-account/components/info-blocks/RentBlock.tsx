import React, {useState} from 'react';
import {RentTable} from '../tables/RentTable';
import s from "./InfoBlock.module.scss";
import ConfidantMenu from "../contextMenu/ConfidantMenu";
import Configurator from "../../../modals/Configurator";
import RentMenu from "../contextMenu/rentMenu";

type StateType = {
    id: number
    title: string
    number: string
}

type PropsType = {
    archive?: boolean
}

const RentBlock = (props: PropsType) => {

    let state: StateType [] = [
        {id: 1, title: 'Аренда места', number: '253/893.156',},
    ]

    return (
        <>
            {state.length !== 0 ?
                state.map((el) => {
                    return (
                        <div className={s.wrap} key={el.id}>
                            <span className={s.error}>Услуга заблокирована</span>
                            <div className={s.top}>
                                <h4 className={s.caption}>{el.title}</h4>
                                <span className={s.number}>{el.number}</span>
                                {!props.archive && <a href="#" className={s.link}>?</a>}
                                {!props.archive && <RentMenu/>}
                            </div>
                            <RentTable archive={props.archive}/>
                            <div className={!props.archive ? s.bot : `${s.bot} ${s.archive}`}>
                                <div className={s.data}>
                                    <span className={s.data__caption}>Дата подключения:</span>
                                    <strong className={s.data__num}>21.05.2017</strong>
                                </div>
                                {!props.archive
                                    ? <div className={s.price}>
                                        <span className={s.price__caption}>Итого:</span>
                                        <strong className={s.price__sum}>3 300 ₽</strong>
                                    </div>
                                    : <>
                                        <div className={s.slash}>|</div>
                                        <div className={`${s.data} ${s.off}`}>
                                            <span className={s.data__caption}>Дата подключения:</span>
                                            <strong className={s.data__num}>21.05.2017</strong>
                                        </div>
                                    </>
                                }
                            </div>
                            {!props.archive && <a href="/" className={s.more}>Подробнее</a>}
                        </div>
                    )
                })
                : <div className={s.wrap}>
                    <div className={s.row}>
                        <div className={`${s.top} ${s.zero}`}>
                            <h4 className={s.caption}>Аренда места</h4>
                            <a href="/" className={s.link}>?</a>
                        </div>
                        <button className={s.button}>Подключить</button>
                    </div>
                </div>
            }
        </>
    );
};

export default RentBlock;

