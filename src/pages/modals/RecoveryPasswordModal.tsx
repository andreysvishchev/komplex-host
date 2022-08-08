import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import Input from "../components/Input/Input";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openCaptchaModal, openRecoveryModal} from "../../reducers/modalReducer";
import {useFormik} from "formik";
import {recoveryPassword, sendCaptcha} from "../../reducers/authReducer";
import {useDispatch} from "react-redux";
import Button from "../components/button/Button";


type FormikErrorType = {
    email?: string
}

const RecoveryPasswordModal = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const open = useAppSelector<boolean>(state => state.modal.recoverModal)
    const errorStatus = useAppSelector<boolean>(state => state.error.captchaError)
    const errorMessage = useAppSelector<string>(state => state.error.captchaErrorMessage)
    const handleClose = () => {
        dispatch(openRecoveryModal(false))
    }

    const formik = useFormik({
        initialValues: {
            email: '',
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
            dispatch(recoveryPassword(values.email))
            formik.resetForm()
        },
    })
    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.auth__title}>Восстановление пароля</div>
                {errorStatus &&
                <div className={s.auth__error}>{errorMessage}</div>}
                <form onSubmit={formik.handleSubmit}>
                    <Input caption={'Электронная почта'}
                           errorText={formik.errors.email}
                           error={formik.errors.email &&
                               formik.touched.email || errorStatus}
                           {...formik.getFieldProps('email')}
                           name="email"
                           onBlur={formik.handleBlur}
                           onChange={formik.handleChange}
                           value={formik.values.email}
                           placeholder={'Введите e-mail'}
                           type={'email'}/>
                    <Button title={'Восстановить'} type='submit'/>
                </form>
            </Box>
        </Modal>
    );
};

export default RecoveryPasswordModal;