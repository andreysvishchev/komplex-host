import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {deleteAllConfidant, deleteConfidant} from "../../store/confidantReducer";
import {useDispatch} from "react-redux";
import {deleteAllNotes, deleteNote} from "../../store/notesReducer";
import {
    ConfirmParamsType,
    openConfirmModal,
    openNoticeModal
} from "../../store/modalReducer";
import {AppDispatchType, useAppSelector} from "../../store/store";


const ConfirmModal = () => {
    const closeParams: ConfirmParamsType = {
        open: false,
        deleteAll: false,
        messages: '',
        type: ''
    }
    const deleteAll = useAppSelector(state => state.modal.confirmModal.deleteAll)
    const messages = useAppSelector(state => state.modal.confirmModal.messages)
    const type = useAppSelector(state => state.modal.confirmModal.type)
    const open = useAppSelector(state => state.modal.confirmModal.open)
    const noteData = useAppSelector(state => state.modal.confirmModal.noteData)
    const confidantData = useAppSelector(state => state.modal.confirmModal.confidantData)
    const dispatch = useDispatch<AppDispatchType>()

    const handleClose = () => dispatch(openConfirmModal(closeParams));

    const deleteConfidantsHandler = () => {
        dispatch(openConfirmModal(closeParams));
        dispatch(deleteAllConfidant())
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Все записи из таблицы “Доверенное лицо” удалены'
        }))
    }
    const deleteNotesHandler = () => {
        dispatch(openConfirmModal(closeParams));
        dispatch(deleteAllNotes())
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Все заметки удалены'
        }))
    }
    const deleteNoteHandler = () => {
        dispatch(openConfirmModal(closeParams));
        dispatch(deleteNote(noteData!.id))
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: `Запись ${noteData!.caption} удалена`
        }))
    }
    const deleteConfidantHandler = () => {
        dispatch(openConfirmModal(closeParams));
        dispatch(deleteConfidant(confidantData!.id))
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: `Доверенное лицо ${confidantData!.caption} удалено из таблицы`
        }))

    }
    const offRentHandler = () => {
        dispatch(openConfirmModal(closeParams));
        dispatch(openNoticeModal({
            open: true,
            success: true,
            message: 'Запрос на отключение услуги Аренда места отправлен'
        }))
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <div className={s.confirm}>
                        <div className={s.message}>{messages}</div>
                        <div className={s.row}>
                            <button onClick={handleClose} className={s.cancel}>Отмена
                            </button>
                            {type === "confidant" &&
                            <button
                                onClick={deleteAll ? deleteConfidantsHandler : deleteConfidantHandler}
                                className={s.save}>Ок</button>}
                            {type === "notes" &&
                            <button
                                onClick={deleteAll ? deleteNotesHandler : deleteNoteHandler}
                                className={s.save}>Ок</button>}
                            {type === "rent" &&
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