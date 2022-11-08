import React, {MutableRefObject, useState} from 'react';
import {useOnClickOutside} from "../../function/useOnClickOutside";
import s from './ContextMenu.module.scss'
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {openConfirmModal, openNoteModal} from "../../store/modalReducer";

type PropsType = {
    important: boolean
    text: string
    date: string
    id: string
}

const NoteMenu = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatchType>()

    const ref = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => dispatch(openConfirmModal({
        open: true,
        noteData: {id: props.id, caption: props.date},
        deleteAll: false,
        type: "notes",
        messages: `Вы уверены, что хотите удалить запись ${props.date}?`
    }))

    const openNoteModalHandler = () => dispatch(openNoteModal({
        open: true,
        newNote: false,
        date: props.date,
        id: props.id,
        important: props.important,
        text: props.text
    }))

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.dots} ref={ref}>
            <button
                className={open ? `${s.dots__btn} ${s.isOpen} ${s.blue}` : `${s.dots__btn} ${s.blue}`}
                onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div data-menu='style'
                 className={open ? `${s.dots__menu} ${s.isOpen}` : s.dots__menu}>
                <button onClick={openNoteModalHandler} className={s.button}>Изменить
                </button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить
                </button>
            </div>
        </div>

    );
};

export default NoteMenu;