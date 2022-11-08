import React from 'react';
import s from './ServerItem.module.scss'
import Button from "../../../../../components/button/Button";

type PropsType = {
    id: string
    number: string
    cpu: string
    ram: string
    hdd: string
    ipmi: string
    price: number
}
const ServerItem: React.FC<PropsType> = ({id, number, cpu, ram, hdd, ipmi, price}) => {
    return (
        <div className={s.item} id={id}>
            <div className={`${s.item__col} ${s.blue}`}>{number}</div>
            <div className={s.item__col}>
                <div className={s.item__caption}>CPU</div>
                <div className={s.item__text}>{cpu}</div>
            </div>

            <div className={s.item__col}>
                <div className={s.item__caption}>RAM</div>
                <div className={s.item__text}>{ram}</div>
            </div>
            <div className={s.item__col}>
                <div className={s.item__caption}>HDD</div>
                <div className={s.item__text}>{hdd}</div>
            </div>
            <div className={s.item__col}>
                <div className={s.item__caption}>IPMI</div>
                <div className={s.item__text}>{ipmi}</div>
            </div>
            <div className={s.item__col}>
                <div className={s.item__caption}>Итого</div>
                <div className={`${s.item__text} ${s.blue}`}>{price} ₽</div>
            </div>
            <Button type={'button'} title={'Подключить'}/>
        </div>
    );
};

export default ServerItem;