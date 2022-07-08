import React from 'react';
import s from './Notes.module.scss'
import {Note} from "./note/Note";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {NoteType} from "../../../../reducers/notesReducer";
import NotesMenu from "../contextMenu/NotesMenu";
import NoteModal from "../../../modals/NoteModal";
import Scrollbars from 'react-custom-scrollbars';


const Notes = () => {
    const [openNoteModal, setOpenNoteModal] = React.useState(false);

    const openNoteModalHandler = () => {
        setOpenNoteModal(true)
    }
    const notes = useSelector<AppStateType, Array<NoteType>>(state => state.notes)

    return (
        <div className={s.wrap}>
            <div className={notes.length === 0 ? `${s.top} ${s.zero}` : s.top}>
                <h4 className={s.caption}>Заметки</h4>
                <a href="#" className={s.link}>?</a>
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
                            <button onClick={openNoteModalHandler} className={s.addNote}>Добавить +</button>
                        </div>
                    }
            </div>
            <NoteModal
                new={true}
                date={new Date().toLocaleDateString()}
                open={openNoteModal}
                setOpen={setOpenNoteModal}
                text={''}
                important={false}/>
        </div>
    );
};


export default Notes;