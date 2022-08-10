import React from 'react';
import s from './../../../forms/Form.module.scss'
import Input from "../../../components/Input/Input";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../../store/store";
import {getStatus, login} from "../../../../reducers/authReducer";
import {useFormik} from "formik";
import {openRecoveryModal} from "../../../../reducers/modalReducer";
import RecoveryPasswordModal from "../../../modals/RecoveryPasswordModal";
import load from '../../../../img/load-btn.svg'
import Button from "../../../components/button/Button";
import ConfirmPasswordModal from "../../../modals/ConfirmPasswordModal";
import {btoa} from "buffer";


type FormikErrorType = {
    email?: string
    password?: string
}

const LogIn = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const errorStatus = useAppSelector<boolean>(state => state.error.loginError)
    const openRecoveryModalHandler = () => {
        dispatch(openRecoveryModal(true))
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Email указан некорректно';
            }
            if (!values.password) {
                errors.password = 'Поле обязательно для заполнения';
            } else if (values.password.length < 5) {
                errors.password = 'Проль должен содержать не меньше 8 символов'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm()
        },
    })


    return (
        <>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <Input caption={'Электронная почта'}
                       errorText={formik.errors.email}
                       error={formik.errors.email &&
                           formik.touched.email || errorStatus}
                       {...formik.getFieldProps('email')}
                       placeholder={'Введите e-mail'}/>
                <Input caption={'Пароль'}
                       {...formik.getFieldProps('password')}
                       placeholder={'Введите пароль'}
                       password={true}
                       errorText={formik.errors.password}
                       error={formik.errors.password &&
                           formik.touched.password || errorStatus}/>
                <div className={s.form__row} style={{marginTop: '24px'}}>
                    <Button type={'submit'} title={'Вход'}/>
                    <button type={'button'} onClick={openRecoveryModalHandler} className={s.recovery}>Забыли пароль?
                    </button>
                </div>
            </form>
            <RecoveryPasswordModal/>

        </>

    );
};

export default LogIn;