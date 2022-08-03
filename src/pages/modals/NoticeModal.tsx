import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../../store/store";
import {closeModalAC, ModalType} from "../../reducers/modalReducer";



const NoticeModal = () => {

    const dispatch = useDispatch()
    const state = useAppSelector<ModalType>(state => state.modal)

    const handleClose = () => {
        dispatch(closeModalAC(false))
    }

    return (
        <div>
            <Modal
                open={state.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal}>
                    <div className={s.notice}>
                        <div className={s.message}>{state.message}</div>
                        <button onClick={handleClose} className={s.success}>Ок</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default NoticeModal;