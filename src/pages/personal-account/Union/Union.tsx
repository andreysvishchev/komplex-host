import React from 'react';
import s from '../PersonalAccount.module.scss'
import UnionTable from "../components/tables/UnionTable";

const Union = () => {
    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Все платежи</div>
                    <button className={s.tooltip}>?</button>
                </div>
                <button className={s.button}>Сформировать акт сверки</button>
            </div>
            <UnionTable/>
            <button className={s.show}>Развернуть все платежи</button>
        </div>
    );
};

export default Union;