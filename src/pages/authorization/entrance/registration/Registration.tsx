import React from 'react';
import s from "../../../../components/forms/Form.module.scss";
import Input from "../../../../components/Input/Input";
import {useDispatch} from "react-redux";
import {registrationPage} from '../../../../store/registrationReducer';
import {useFormik} from "formik";
import {getCaptchaUrl, registration} from "../../../../store/authReducer";
import {AppDispatchType, useAppSelector} from "../../../../store/store";
import CaptchaModal from "../../../../components/modals/CaptchaModal";
import Button from "../../../../components/button/Button";


type FormikErrorType = {
    email?: string
    password?: string
    password_repeat?: string
}

const Registration = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const errorStatus = useAppSelector<boolean>(state => state.error.loginError)


    const openRegistrationPage = () => {
        dispatch(registrationPage(true))
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password_repeat: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Email указан некорректно';
            }
            if (values.password !== values.password_repeat) {
                errors.password_repeat = 'Пароли должны совпадать'
            }
            if (!values.password) {
                errors.password = 'Поле обязательно для заполнения';
            } else if (values.password.length < 5) {
                errors.password = 'Проль должен содержать не меньше 8 символов'
            }
            if (!values.password_repeat) {
                errors.password_repeat = 'Поле обязательно для заполнения';
            } else if (values.password_repeat.length < 8) {
                errors.password_repeat = 'Проль должен содержать не меньше 8 символов'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(getCaptchaUrl())
            dispatch(registration(values.email, values.password))
            formik.resetForm()
        },
    })

    const style = {
        marginBottom: 0
    }
    return (
        <>
            <form className={s.form} onSubmit={formik.handleSubmit}>
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
                <Input caption={'Пароль'}
                       placeholder={'Введите пароль'}
                       type={'password'}
                       password={true}
                       {...formik.getFieldProps('password')}
                       name="password"
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       style={style}
                       errorText={formik.errors.password}
                       error={formik.errors.password &&
                           formik.touched.password || errorStatus}/>
                <p className={s.recommendation}>Пароль должен содержать не менее 8 символов. Заглавные, строчные буквы и
                    цифры</p>
                <Input caption={'Повторите пароль'}
                       placeholder={'Повторите пароль'}
                       type={'password'}
                       password={true}
                       {...formik.getFieldProps('password_repeat')}
                       name="password_repeat"
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       value={formik.values.password_repeat}
                       errorText={formik.errors.password_repeat}
                       error={formik.errors.password_repeat &&
                           formik.touched.password_repeat || errorStatus}/>
                <div className={s.form__row} style={{marginTop: '24px', justifyContent: "flex-end"}}>
                    <Button type='submit' title={'Далее'}/>
                </div>
            </form>
            <CaptchaModal/>
        </>

    );
};

export default Registration;