import React from 'react';
import s from './ChatSearch.module.scss'
const ChatSearch = () => {
    return (
        <div className={s.search}>
            <input className={s.search__input} type="text" placeholder="Поиск"/>
            <button className={s.search__btn}/>
        </div>
    );
};

export default ChatSearch;