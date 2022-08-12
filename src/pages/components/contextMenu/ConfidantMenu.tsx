import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../function/useOnClickOutside";
import {AppDispatchType} from "../../../store/store";
import {useDispatch} from "react-redux";
import {openConfidantModal, openConfirmModal} from "../../../reducers/modalReducer";

const ConfidantMenu = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch<AppDispatchType>()
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => dispatch(openConfirmModal({
        open: true,
        messages: 'Вы уверены, что хотите удалить все записи из таблицы “Доверенное лицо”?',
        deleteAll: true,
        type: "confidant"
    }))
    const openConfidantModalHandler = () => dispatch(openConfidantModal({
        open: true,
        newConfidant: true,
        title: 'Новое доверенное лицо'
    }))

    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            <button
                className={toggle ? `${s.dark} ${s.isOpen} ${s.burger}` : `${s.dark} ${s.burger}`}
                onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openConfidantModalHandler}
                        className={s.button}>Добавить
                </button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить
                    все
                </button>
            </div>
        </div>

    );
};

export default ConfidantMenu;