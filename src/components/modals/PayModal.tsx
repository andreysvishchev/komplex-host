import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import ru from "date-fns/locale/ru";
import Input from "../Input/Input";
import Button from "../button/Button";
import {useFormik} from "formik";
import DatePickerField from "../date-picker/DatePickerField";
import {openPayModal} from "../../store/modalReducer";

type FormikErrorType = {
    email?: string
}

type PropsType = {}

const PayModal: React.FC<PropsType> = ({}) => {
    const style = {
        width: '100%'
    }
    const open = useAppSelector(state => state.modal.payModal)
    const dispatch = useDispatch<AppDispatchType>()

    const handleClose = () => {
        dispatch(openPayModal(false))
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            start_date: new Date(),
            end_date: new Date(),
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Email указан некорректно';
            }
            return errors;
        },
        onSubmit: values => {
            const start_date = values.start_date.toLocaleDateString('ru')
            const end_date = values.end_date.toLocaleDateString('ru')
            console.log(start_date, end_date)
        },
    })
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.pay}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={s.caption}>Сформировать акт сверки</div>
                        <div className={s.pay__row}>
                            <div className={s.pay__col}>
                                <label htmlFor="start_date" className={s.pay__label}/>
                                <DatePickerField id='start_date'
                                                 onChange={formik.setFieldValue}
                                                 value={formik.values.start_date}
                                                 name='start_date'/>
                            </div>
                            <span className={s.pay__hyp}/>
                            <div className={s.pay__col}>
                                <label htmlFor="end_date" className={s.pay__label}/>
                                <DatePickerField id='end_date'
                                                 onChange={formik.setFieldValue}
                                                 value={formik.values.end_date}
                                                 name='end_date'/>
                            </div>
                        </div>
                        <Input
                            errorText={formik.errors.email}
                            error={formik.errors.email &&
                            formik.touched.email}
                            {...formik.getFieldProps('email')}
                            caption={'Email *'}
                            placeholder={'Введите e-mail'}
                        />
                        <div className={s.pay__buttons}>
                            <Button
                                style={style}
                                callBack={handleClose}
                                type={'button'}
                                title={'Отмена'}
                                light={true}/>
                            <Button
                                type={'submit'}
                                title={'Отправить запрос'}/>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
};

export default PayModal;

