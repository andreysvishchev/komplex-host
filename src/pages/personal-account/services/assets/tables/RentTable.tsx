import React from 'react';
import s from './Table.module.scss'

type StateTye = {
    name: string
    spec?: string
    price: number
    amount: number
    sum: number
}

type PropsType = {
    archive?: boolean
}

export const RentTable = (props: PropsType) => {
    let state: StateTye [] = [
        {name: 'Аренда места', spec: 'Unit', price: 1500, amount: 2, sum: 3000},
        {name: 'Электропитание', spec: 'Watt', price: 150, amount: 200, sum: 30000},
        {name: 'Порт коммутатора', price: 1500, amount: 1, sum: 150},
    ]
    return (
        <div className={s.wrap}>
            <div className={!props.archive ? `${s.captions} ${s.rent}` : `${s.captions} ${s.rent} ${s.archive}`}>
                <h6 className={s.caption}>Наименование услуги</h6>
                {!props.archive && <h6 className={s.caption}>Цена</h6>}
                <h6 className={s.caption}>Кол-во</h6>
                {!props.archive && <h6 className={s.caption}>Сумма</h6>}
            </div>
            {state.map((el, i) => {
                return (
                    <div className={!props.archive ? `${s.row} ${s.rent}` : `${s.row} ${s.rent} ${s.archive}`} key={i}>
                        <div className={`${s.col} ${s.name}`}>{el.name} <span>{el.spec}</span></div>
                        {!props.archive && <div className={`${s.col} ${s.price}`}>{el.price}</div>}
                        <div className={s.col}>{el.amount}</div>
                        {!props.archive && <div className={`${s.col} ${s.sum}`}>{el.sum}</div>}

                    </div>
                )
            })}
        </div>
    );
};