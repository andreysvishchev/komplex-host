import React, {ChangeEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {addNoteAC, editNoteAC} from "../../reducers/notesReducer";


type PropsType = {
    new?: boolean
    id?: string
    date: string
    open: boolean
    setOpen: (open: boolean) => void
    text: string
    important: boolean
}

const NoteModal = (props: PropsType) => {
    const handleClose = () => props.setOpen(false);
    const [check, setCheck] = useState<boolean>(props.important)
    const [value, setValue] = useState<string>(props.text)
    const dispatch = useDispatch()
    const onCheckHandler = () => {
        setCheck(!check)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const addNote = () => {
        debugger
        if (value !== '') {
            dispatch(addNoteAC(props.date, value, check))
            setValue('')
            props.setOpen(false)
        }
    }
    const editNote = () => {
        debugger
        if(props.id) {
            dispatch(editNoteAC(props.id, value, check))
            props.setOpen(false)
        }
    }

    return (
        <>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <button onClick={handleClose} className={s.close}/>
                    <div className={s.caption}>{props.date}</div>
                    <textarea onChange={onChangeHandler} className={s.textarea} value={value}></textarea>
                    <label className={s.checkbox}>
                        <div className={s.checkbox__text}>Отметить важность</div>
                        <span className={check ? `${s.checkbox__icon} ${s.active}` : s.checkbox__icon}></span>
                        <input onChange={onCheckHandler} className={s.checkbox__input} type="checkbox" checked={check}/>
                    </label>
                    <div className={s.row}>
                        <button onClick={handleClose} className={s.cancel}>Отмена</button>
                        <button className={s.save} onClick={props.new ? addNote : editNote}>Сохранить
                        </button>
                    </div>
                </Box>
            </Modal>
        </>

    );
};

export default NoteModal;