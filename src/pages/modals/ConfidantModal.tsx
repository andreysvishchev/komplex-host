import React, {useState} from 'react';
import {Box, Modal} from "@mui/material";
import s from './Modal.module.scss'
import {modal} from "../../style/style";
import {useDispatch} from "react-redux";
import EditableInput from "../components/editable-input/EditableInput";
import {addConfidant, editConfidant} from "../../reducers/confidantReducer";
import {AppDispatchType, useAppSelector} from "../../store/store";

type PropsType = {
    new?: boolean
    id?: string
    title: string
    open: boolean
    setOpen: (open: boolean) => void
    passport: string
    name: string
    tel: string
}

const ConfidantModal = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const handleClose = () => props.setOpen(false);

    const [name, setName] = useState<string>(props.name)
    const [passport, setPassport] = useState<string>(props.passport)
    const [tel, setTel] = useState<string>(props.tel)


    const nameHandler = (value: string) => setName(value)
    const passportHandler = (value: string) => setPassport(value)
    const telHandler = (value: string) => setTel(value)


    const editConfidantHandler = (name: string, passport: string, tel: string) => {
            dispatch(editConfidant(props.id!, name, passport, tel))
            props.setOpen(false)
    }

    const newConfidantHandler = (name: string, passport: string, tel: string) => {
        if (name !== '' && tel !== '') {
            dispatch(addConfidant(name, passport, tel))
            setName('')
            setTel('')
            setPassport('')
            props.setOpen(false)
        }
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.caption}>{props.title} </div>
                <EditableInput caption={'ФИО'} placeholder={'Введите ФИО'} value={name} setValue={nameHandler}/>
                <EditableInput caption={'Серия и номер паспорта'} placeholder={'Введите серию и номер паспорта'}
                               value={passport} setValue={passportHandler}/>
                <EditableInput caption={'Телефон'} placeholder={'Введите телефон'} value={tel} setValue={telHandler}/>
                <div className={s.row}>
                    <button onClick={handleClose} className={s.cancel}>Отмена</button>
                    <button onClick={props.new
                        ? () => newConfidantHandler(name, passport, tel)
                        : () => editConfidantHandler(name, passport, tel)
                    } className={s.save}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfidantModal;