import React from 'react';
import s from './Search.module.scss'

type PropsType = {

}

const Search = (props: PropsType) => {
    return (
        <div className={s.wrap}>
            <input type="text" className={s.input} placeholder="Поиск"/>
            <button className={s.button}/>
        </div>
    );
};

export default Search;