import React, {ChangeEvent} from 'react';
import s from './Search.module.scss'

type PropsType = {
    value: string
    setValue: (value: string) => void
    prevPage: (value: number) => void
}

const Search = ({value, setValue, prevPage}: PropsType) => {

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        prevPage(1)
    }

    return (
        <div className={s.wrap}>
            <input onChange={onchangeHandler} value={value} type="text"
                   className={s.input}
                   placeholder="Поиск"/>
            <button className={s.button}/>
        </div>
    );
};

export default Search;