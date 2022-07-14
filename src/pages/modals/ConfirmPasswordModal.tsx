import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import FormInput from "../forms/components/FormInput/FormInput";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openConfirmRecoveryModal, openRecoveryModal} from "../../reducers/modal-reducer";
import {useFormik} from "formik";
import {confirmRecoveryPassword, recoveryPassword} from "../../reducers/authReducer";
import Button from "../personal-account/components/button/Button";
import {useParams, useSearchParams} from 'react-router-dom';


type FormikErrorType = {
    password?: string
    password_repeat?: string
    guid?: string
}

type PropsType = {
    guid: string | null
}

const ConfirmPasswordModal = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const open = useAppSelector<boolean>(state => state.modal.openConfirmRecoveryModal)
    const errorStatus = useAppSelector<boolean>(state => state.error.recoveryError)
    const errorMessage = useAppSelector<string>(state => state.error.recoveryErrorMessage)
    const [searchParams, setSearchParams] = useSearchParams();
    const handleClose = () => {
        dispatch(openConfirmRecoveryModal(false))
    }

    const formik = useFormik({
        initialValues: {
            password: '',
            password_repeat: '',
            guid: `${props.guid}`
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password_repeat) {
                errors.password_repeat = 'Поле обязательно для заполнения';
            } else if (values.password_repeat.length < 8) {
                errors.password_repeat = 'Проль должен содержать не меньше 8 символов'
            }
            if (values.password !== values.password_repeat) {
                errors.password_repeat = 'Пароли должны совпадать'
            }
            if (!values.password) {
                errors.password = 'Поле обязательно для заполнения';
            } else if (values.password.length < 5) {
                errors.password = 'Проль должен содержать не меньше 8 символов'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(confirmRecoveryPassword(values.guid, values.password))
            setSearchParams('')
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
                    <input className={s.hidden}
                           {...formik.getFieldProps('guid')}
                           disabled={true}
                           name='guid'
                           value={formik.values.guid}
                    />
                    <FormInput caption={'Новый пароль'}
                               {...formik.getFieldProps('password')}
                               name="password"
                               placeholder={'Введите новый пароль'}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}
                               value={formik.values.password}
                               password={true}
                               errorText={formik.errors.password}
                               error={formik.errors.password &&
                               formik.touched.password || errorStatus}/>
                    <FormInput caption={'Подтвердите новый пароль'}
                               placeholder={'Введите новый пароль'}
                               password={true}
                               {...formik.getFieldProps('password_repeat')}
                               name="password_repeat"
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}
                               value={formik.values.password_repeat}
                               errorText={formik.errors.password_repeat}
                               error={formik.errors.password_repeat &&
                               formik.touched.password_repeat || errorStatus}/>
                    <Button title={'Сменить пароль'} type='submit'/>
                </form>
            </Box>
        </Modal>
    );
};

export default ConfirmPasswordModal;