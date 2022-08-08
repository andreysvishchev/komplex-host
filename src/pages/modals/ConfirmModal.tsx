import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {deleteAllConfidant, deleteConfidant} from "../../reducers/confidantReducer";
import {useDispatch} from "react-redux";
import {deleteAllNotes} from "../../reducers/notesReducer";
import {openNoticeModal} from "../../reducers/modalReducer";

type PropsType = {
    messages: string
    open: boolean
    setOpen: (open: boolean) => void
    deleteAll?: boolean
    notes?: boolean
    noteId?: string
    noteCaption?: string
    confidant?: boolean
    confidantId?: string
    confidantCaption?: string
    rent?: boolean
}

const ConfirmModal = (props: PropsType) => {
    const handleClose = () => props.setOpen(false);
    const dispatch = useDispatch()

    const deleteConfidantsHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllConfidant())
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Все записи из таблицы “Доверенное лицо” удалены'
        }))
    }
    const deleteNotesHandler = () => {
        props.setOpen(false);
        dispatch(deleteAllNotes())
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Все заметки удалены'
        }))
    }
    const deleteNoteHandler = () => {
        if (props.noteId) {
            props.setOpen(false)
            dispatch(openNoticeModal({
                open: true,
                success: true,
                message: `Запись ${props.noteCaption} удалена`
            }))
        }
    }
    const deleteConfidantHandler = () => {
        if (props.confidantId) {
            props.setOpen(false)
            dispatch(deleteConfidant(props.confidantId))
            dispatch(openNoticeModal({
                open: true,
                success: true,
                message: `Доверенное лицо ${props.confidantCaption} удалено из таблицы`
            }))
        }
    }
    const offRentHandler = () => {
        props.setOpen(false)
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Запрос на отключение услуги Аренда места отправлен'
        }))
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <div className={s.confirm}>
                        <div className={s.message}>{props.messages}</div>
                        <div className={s.row}>
                            <button onClick={handleClose} className={s.cancel}>Отмена
                            </button>
                            {props.confidant &&
                            <button
                                onClick={props.deleteAll ? deleteConfidantsHandler : deleteConfidantHandler}
                                className={s.save}>Ок</button>}
                            {props.notes &&
                            <button
                                onClick={props.deleteAll ? deleteNotesHandler : deleteNoteHandler}
                                className={s.save}>Ок</button>}
                            {props.rent &&
                            <button onClick={offRentHandler}
                                    className={s.save}>Ок</button>}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ConfirmModal;