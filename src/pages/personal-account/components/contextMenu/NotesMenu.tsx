import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../../function/useOnClickOutside";
import ConfirmModal from "../../../modals/ConfirmModal";
import NoteModal from "../../../modals/NoteModal";


type NotesMenuPropsType = {
    notBtn?: boolean
}

const NotesMenu = (props: NotesMenuPropsType) => {
    const [toggle, setToggle] = useState(false);
    const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
    const [openNoteModal, setOpenNoteModal] = React.useState(false);
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>

    const openConfirmModalHandler = () => {
        setOpenConfirmModal(true)
    }
    const openNotesModalHandler = () => {
        setOpenNoteModal(true)
    }

    useOnClickOutside(myRef, () => setToggle(false))

    return (
        <div className={s.wrap} ref={myRef}>
            {props.notBtn &&
                <button className={toggle ? `${s.burger} ${s.isOpen} ${s.blue}` : `${s.burger} ${s.blue}`}
                        onClick={() => setToggle(!toggle)}>
                    <span/>
                    <span/>
                    <span/>
                </button>}

            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openNotesModalHandler} className={s.button}>Добавить</button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить все</button>
            </div>
            <NoteModal
                new={true}
                date={new Date().toLocaleDateString()}
                open={openNoteModal}
                setOpen={setOpenNoteModal}
                text={''}
                important={false}/>
            <ConfirmModal
                deleteAll={true}
                notes={true}
                open={openConfirmModal}
                setOpen={setOpenConfirmModal}
                messages={'Вы уверены, что хотите удалить все заметки?'}/>
        </div>

    );
};

export default NotesMenu;