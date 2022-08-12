import React, {ChangeEvent, useEffect, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {addNoteAC, editNoteAC} from "../../reducers/notesReducer";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openNoteModal} from "../../reducers/modalReducer";

const NoteModal = () => {
    const open = useAppSelector(state => state.modal.noteModal.open)
    const newNote = useAppSelector(state => state.modal.noteModal.newNote)
    const date = useAppSelector(state => state.modal.noteModal.date)
    const text = useAppSelector(state => state.modal.noteModal.text)
    const id = useAppSelector(state => state.modal.noteModal.id)
    const important = useAppSelector(state => state.modal.noteModal.important)

    const dispatch = useDispatch<AppDispatchType>()
    const [check, setCheck] = useState<boolean>(important!)
    const [value, setValue] = useState<string>(text!)

    useEffect(() => {
        setCheck(important!)
        setValue(text!)
    }, [text, important])

    const handleClose = () => dispatch(openNoteModal({open: false}));
    const onCheckHandler = () => {
        setCheck(!check)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const addNote = () => {
        dispatch(addNoteAC(date!, value, check))
        setValue('')
        dispatch(openNoteModal({open: false}))

    }
    const editNote = () => {
        dispatch(editNoteAC(id!, value, check))
        dispatch(openNoteModal({open: false}))
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <button onClick={handleClose} className={s.close}/>
                    <div className={s.caption}>{date}</div>
                    <textarea onChange={onChangeHandler} className={s.textarea}
                              value={value}/>
                    <label className={s.checkbox}>
                        <div className={s.checkbox__text}>Отметить важность</div>
                        <span
                            className={check ? `${s.checkbox__icon} ${s.active}` : s.checkbox__icon}/>
                        <input onChange={onCheckHandler} className={s.checkbox__input}
                               type="checkbox" checked={check}/>
                    </label>
                    <div className={s.row}>
                        <button onClick={handleClose} className={s.cancel}>Отмена</button>
                        <button className={s.save}
                                onClick={newNote ? addNote : editNote}>Сохранить
                        </button>
                    </div>
                </Box>
            </Modal>
        </>

    );
};

export default NoteModal;