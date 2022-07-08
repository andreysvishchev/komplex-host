import React, {MutableRefObject, useState} from 'react';
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import s from './ContextMenu.module.scss'
import ConfirmModal from "../../../modals/ConfirmModal";
import NoteModal from "../../../modals/NoteModal";
import {useDispatch} from "react-redux";
import {deleteNoteAC} from "../../../../reducers/notesReducer";

type PropsType = {
    important: boolean
    text: string
    date: string
    id: string
}

const NoteMenu = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false);
    const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)
    const [openNoteModal, setOpenNoteModal] = useState<boolean>(false)
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => {
        setOpenConfirmModal(true)
    }
    const openNoteModalHandler = () => {
        setOpenNoteModal(true)
    }

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.dots} ref={ref}>
            <button className={open ? `${s.dots__btn} ${s.isOpen} ${s.blue}` : `${s.dots__btn} ${s.blue}`}
                    onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div data-menu='style' className={open ? `${s.dots__menu} ${s.isOpen}` : s.dots__menu}>
                <button onClick={openNoteModalHandler} className={s.button}>Изменить</button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить</button>
            </div>
            <ConfirmModal
                notes={true}
                noteCaption={props.date}
                noteId={props.id}
                messages={`Вы уверены, что хотите удалить запись ${props.date}?`}
                deleteAll={false}
                open={openConfirmModal}
                setOpen={setOpenConfirmModal}/>
            <NoteModal date={props.date}
                       id={props.id}
                       new={false}
                       open={openNoteModal}
                       setOpen={setOpenNoteModal}
                       text={props.text}
                       important={props.important}/>
        </div>

    );
};

export default NoteMenu;