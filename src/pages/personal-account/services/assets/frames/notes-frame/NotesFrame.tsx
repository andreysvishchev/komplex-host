import React from 'react';
import s from './NotesFrame.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../../../../store/store";
import {NoteType} from "../../../../../../store/notesReducer";
import NotesMenu from "../../../../../../components/contextMenu/NotesMenu";
import NoteModal from "../../../../../../components/modals/NoteModal";
import Tooltip from "../../../../../../components/tooltip/Tooltip";
import {Note} from "./note/Note";
import {openNoteModal} from "../../../../../../store/modalReducer";


const NotesFrame = () => {
    const notes = useSelector<AppStateType, Array<NoteType>>(state => state.notes)
    const dispatch = useDispatch<AppDispatchType>()

    const openNoteModalHandler = () => dispatch(openNoteModal({
        open: true,
        newNote: true,
        date: new Date().toLocaleDateString()
    }))

    return (
        <div className={s.wrap}>
            <div className={notes.length === 0 ? `${s.top} ${s.zero}` : s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Заметки</div>
                    <Tooltip/>
                </div>
                <NotesMenu notBtn={notes.length !== 0}/>
            </div>
            <div className={s.items}>
                {notes.length !== 0 ?
                    notes.map(note => {
                        return (
                            <Note key={note.id}
                                  id={note.id}
                                  date={note.date}
                                  caption={note.caption}
                                  important={note.important}
                            />
                        )
                    }) :
                    <div>
                        <h6 className={s.empty}>Пока нет записей</h6>
                        <button onClick={openNoteModalHandler}
                                className={s.addNote}>Добавить +
                        </button>
                    </div>
                }
            </div>
            <NoteModal/>
        </div>
    );
};


export default NotesFrame;