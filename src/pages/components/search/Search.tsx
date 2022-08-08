import React, {ChangeEvent} from 'react';
import s from './Search.module.scss'

type PropsType = {
    value: string
    setValue: (value: string) => void
}

const Search = ({value, setValue}: PropsType) => {

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
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