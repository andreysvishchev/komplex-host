import React, {ChangeEvent, useState} from 'react';
import {Box, Modal} from "@mui/material";
import {addConfidantAC, ConfidantType, editConfidantAC} from "../../reducers/confidantReducer";
import FormInput from "../forms/components/FormInput/FormInput";
import s from './Modal.module.scss'
import {modal} from "../../style/style";
import EditableInput from "../forms/components/EditInput/EditableInput";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch()
    const handleClose = () => props.setOpen(false);

    const [name, setName] = useState<string>(props.name)
    const [passport, setPassport] = useState<string>(props.passport)
    const [tel, setTel] = useState<string>(props.tel)


    const nameHandler = (value: string) => setName(value)
    const passportHandler = (value: string) => setPassport(value)
    const telHandler = (value: string) => setTel(value)


    const editConfidant = (name: string, passport: string, tel: string) => {
        if (props.id) {
            dispatch(editConfidantAC(props.id, name, passport, tel))
            props.setOpen(false)
        }
    }

    const newConfidant = (name: string, passport: string, tel: string) => {
        if (name !== '' && passport !== '' && tel !== '') {
            dispatch(addConfidantAC(name, passport, tel))
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
                        ? () => newConfidant(name, passport, tel)
                        : () => editConfidant(name, passport, tel)
                    } className={s.save}>Сохранить
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default ConfidantModal;