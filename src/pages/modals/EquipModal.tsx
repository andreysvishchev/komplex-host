import React, {ChangeEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {saveComment} from "../../reducers/equipReducer";
import {AppDispatchType} from "../../store/store";

type PropsType = {
    id: string
    title: string
    comment: string
    open: boolean
    setOpen: (open: boolean) => void
}

const EquipModal = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>();
    const handleClose = () => props.setOpen(false)
    const [value, setValue] = useState<string>(props.comment)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    const saveCommentHandler = () => {
        dispatch(saveComment(props.id, value))
        props.setOpen(false)
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.caption}>{props.title}</div>
                <textarea onChange={onChangeHandler} className={s.textarea} value={value}/>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cancel}>Отмена</button>
                    <button className={s.save} onClick={saveCommentHandler}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default EquipModal;