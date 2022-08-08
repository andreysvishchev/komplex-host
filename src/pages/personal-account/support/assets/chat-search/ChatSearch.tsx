import React from 'react';
import s from '../../Support.module.scss'
const ChatSearch = () => {
    return (
        <div className={s.search}>
            <input className={s.search__input} type="text" placeholder="Поиск"/>
            <button className={s.search__btn}></button>
        </div>
    );
};

export default ChatSearch;