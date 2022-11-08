import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../function/useOnClickOutside";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {openConfirmModal, openNoteModal} from "../../store/modalReducer";


type NotesMenuPropsType = {
    notBtn?: boolean
}

const NotesMenu = (props: NotesMenuPropsType) => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch<AppDispatchType>()
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => dispatch(openConfirmModal({
        messages: 'Вы уверены, что хотите удалить все заметки?',
        open: true,
        deleteAll: true,
        type: "notes"
    }))

    const openNotesModalHandler = () => dispatch(openNoteModal({
        open: true,
        newNote: true,
        date: new Date().toLocaleDateString()
    }))

    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            {props.notBtn &&
            <button
                className={toggle ? `${s.burger} ${s.isOpen} ${s.blue}` : `${s.burger} ${s.blue}`}
                onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>}

            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openNotesModalHandler} className={s.button}>Добавить
                </button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить
                    все
                </button>
            </div>
        </div>

    );
};

export default NotesMenu;