import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import Input from "../Input/Input";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {openCaptchaModal} from "../../store/modalReducer";
import {useFormik} from "formik";
import {getCaptchaUrl, sendCaptcha} from "../../store/authReducer";
import {resetCaptcha} from "../../store/errorReducer";
import Button from "../button/Button";


type FormikErrorType = {
    captcha?: string
}

const CaptchaModal = () => {
    const url = useAppSelector<string>(state => state.error.captchaUrl)
    const errorStatus = useAppSelector<boolean>(state => state.error.captchaError)
    const errorMessage = useAppSelector<string>(state => state.error.captchaErrorMessage)
    const open = useAppSelector<boolean>(state => state.modal.captchaModal)
    const resCaptcha = useAppSelector<number>(state=> state.error.resetCaptcha)
    const dispatch = useDispatch<AppDispatchType>()

    const handleClose = () => {
        dispatch(openCaptchaModal(false))
    }
    const resetCaptchaUrl = () => {
        dispatch(getCaptchaUrl())
        dispatch(resetCaptcha())
    }

    const formik = useFormik({
        initialValues: {
            captcha: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.captcha) {
                errors.captcha = 'Поле обязательно для заполнения';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(sendCaptcha(values.captcha))
            formik.resetForm()
        },
    })


    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <button onClick={handleClose} className={s.close}/>
                <div className={s.auth__title}>Регистрация</div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.auth__row}>
                        <img className={s.auth__img} key={resCaptcha} src={url} alt={'ведите текст с картинки'}/>
                        <button onClick={resetCaptchaUrl} type={"button"} className={s.auth__btn}>Обновить</button>
                    </div>
                    {errorStatus &&
                    <div className={s.auth__error}>{errorMessage}</div>}
                    <Input
                        caption={'Введите код с картинки'}
                        placeholder={'Код с картинки'}
                        errorText={formik.errors.captcha}
                        error={formik.errors.captcha &&
                        formik.touched.captcha || errorStatus}
                        {...formik.getFieldProps('captcha')}
                        name="captcha"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.captcha}
                    />
                    <Button type={"submit"} title={'Ок'}/>
                </form>
            </Box>
        </Modal>
    );
};

export default CaptchaModal;