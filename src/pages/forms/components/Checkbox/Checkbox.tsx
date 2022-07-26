import React, {ChangeEvent} from 'react';
import s from '../../Form.module.scss'

type PropsType = {
    checked: boolean
    onChangeChecked: (checked: boolean) => void
}

const Checkbox = (props: PropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
            props.onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.checkbox}>
            <input onChange={onChangeCallback} className={s.checkbox__input} type="checkbox"/>
            <span className={props.checked ? `${s.checkbox__icon} ${s.active}` : s.checkbox__icon}/>
        </label>
    );
};

export default Checkbox;