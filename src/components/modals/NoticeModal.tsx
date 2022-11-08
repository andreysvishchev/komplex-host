import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openNoticeModal} from "../../store/modalReducer";
import Button from "../button/Button";


const NoticeModal = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const open = useAppSelector(state => state.modal.noticeModal.open)
    const message = useAppSelector(state => state.modal.noticeModal.message)

    const handleClose = () => {
        dispatch(openNoticeModal({message: '', success: true, open: false}))
    }
    const style = {
        width: "max-content",
        margin: '0 auto'
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={modal}>
                    <div className={s.notice}>
                        <div className={s.message}>{message}</div>
                        <Button style={style} callBack={handleClose} type={'button'} title={'Ok'}/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default NoticeModal;