import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openNoticeModal} from "../../reducers/modalReducer";


const NoticeModal = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const open = useAppSelector(state => state.modal.noticeModal.open)
    const message = useAppSelector(state => state.modal.noticeModal.message)

    const handleClose = () => {
        dispatch(openNoticeModal({message: '', success: true, open: false}))
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={modal}>
                    <div className={s.notice}>
                        <div className={s.message}>{message}</div>
                        <button onClick={handleClose} className={s.success}>Ок</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default NoticeModal;