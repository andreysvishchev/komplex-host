import React, {useEffect, useState} from 'react';
import {Box, Modal} from "@mui/material";
import s from './Modal.module.scss'
import {modal} from "../../style/style";
import {useDispatch} from "react-redux";
import EditableInput from "../editable-input/EditableInput";
import {addConfidant, editConfidant} from "../../store/confidantReducer";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openConfidantModal} from "../../store/modalReducer";


const ConfidantModal = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const open = useAppSelector(state => state.modal.confidantModal.open)
    const newConfidant = useAppSelector(state => state.modal.confidantModal.newConfidant)
    const id = useAppSelector(state => state.modal.confidantModal.id)
    const title = useAppSelector(state => state.modal.confidantModal.title)
    const passport = useAppSelector(state => state.modal.confidantModal.passport)
    const name = useAppSelector(state => state.modal.confidantModal.name)
    const tel = useAppSelector(state => state.modal.confidantModal.tel)

    const [nameValue, setNameValue] = useState<string>(name!)
    const [passportValue, setPassportValue] = useState<string>(passport!)
    const [telValue, setTelValue] = useState<string>(tel!)

    useEffect(()=> {
        setNameValue(name!)
        setPassportValue(passport!)
        setTelValue(tel!)
    },[name, passport, tel])

    const handleClose = () => dispatch(openConfidantModal({open: false, name: ''}))
    const nameHandler = (value: string) => setNameValue(value)
    const passportHandler = (value: string) => setPassportValue(value)
    const telHandler = (value: string) => setTelValue(value)

    const editConfidantHandler = (name: string, passport: string, tel: string) => {
        dispatch(editConfidant(id!, name, passport, tel))
        dispatch(openConfidantModal({open: false}))
    }

    const newConfidantHandler = (name: string, passport: string, tel: string) => {
        if (name !== '' && tel !== '') {
            dispatch(addConfidant(name, passport, tel))
            setNameValue('')
            setTelValue('')
            setPassportValue('')
            dispatch(openConfidantModal({open: false}))
        }
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.caption}>{title} </div>
                <EditableInput caption={'ФИО'} placeholder={'Введите ФИО'} value={nameValue}
                               setValue={nameHandler}/>
                <EditableInput caption={'Серия и номер паспорта'}
                               placeholder={'Введите серию и номер паспорта'}
                               value={passportValue} setValue={passportHandler}/>
                <EditableInput caption={'Телефон'} placeholder={'Введите телефон'}
                               value={telValue} setValue={telHandler}/>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cancel}>Отмена</button>
                    <button onClick={newConfidant
                        ? () => newConfidantHandler(nameValue, passportValue, telValue)
                        : () => editConfidantHandler(nameValue, passportValue, telValue)
                    } className={s.save}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfidantModal;