import React from 'react';
import s from "./Table.module.scss";

type StateType = {
    id: number
    ip: string
    mask: string
    gateway: string
}

const IpTable = () => {
    let state: StateType[] = [
        {id: 1, ip: '192.168.5.0/29', mask: '255.255.255.248', gateway: '192.168.5.200'},
    ]

    return (
        <div className={s.wrap}>
            <div className={`${s.captions} ${s.ip}`}>
                <h6 className={s.caption}>IP-адрес</h6>
                <h6 className={s.caption}>Маска</h6>
                <h6 className={s.caption}>Шлюз</h6>
            </div>
            { state.length !== 0 ?
                state.map((el, i) => {
                return (
                    <div className={`${s.row} ${s.ip}`} key={el.id}>
                        <div className={s.col}>{el.ip}</div>
                        <div className={s.col}>{el.mask}</div>
                        <div className={s.col}>{el.gateway}</div>
                    </div>
                )
            }) : <div className={s.empty}>В таблице пока нет записей</div>
            }
        </div>
    );
};

export default IpTable;