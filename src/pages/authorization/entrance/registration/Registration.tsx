import React from 'react';
import s from "../../../forms/Form.module.scss";
import FormInput from "../../../forms/components/FormInput/FormInput";
import {useDispatch} from "react-redux";
import {registrationPage} from '../../../../reducers/registrationReducer';
import {useFormik} from "formik";
import {login, registration} from "../../../../reducers/authReducer";
import {AppDispatchType, useAppSelector} from "../../../../store/store";

type FormikErrorType = {
    email?: string
    password?: string
    password_repeat?: string
}

const Registration = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const errorStatus = useAppSelector<boolean>(state => state.auth.loginError)

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
                errors.password = 'Пароли не совпадают'
                errors.password_repeat = 'Пароли не совпадают'
            }
            if (!values.password) {
                errors.password = 'Поле обязательно для заполнения';
            } else if (values.password.length < 5) {
                errors.password = 'Проль должен содержать не меньше 8 символов'
            }
            if (!values.password_repeat) {
                errors.password_repeat = 'Поле обязательно для заполнения';
            } else if (values.password_repeat.length < 5) {
                errors.password_repeat = 'Проль должен содержать не меньше 8 символов'
            }
            return errors;
        },
        onSubmit: values => {
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
                <FormInput caption={'Электронная почта'}
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
                <FormInput caption={'Пароль'}
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
                <p className={s.recommendation}>Пароль должен содержать 8 символов. Заглавные, строчные буквы и
                    цифры</p>
                <FormInput caption={'Пароль'}
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
                    <button type='submit' className={s.button}>Далее</button>
                </div>
            </form>
        </>

    );
};

export default Registration;