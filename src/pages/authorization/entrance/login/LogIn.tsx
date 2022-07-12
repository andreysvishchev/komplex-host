import React from 'react';
import s from './../../../forms/Form.module.scss'
import FormInput from "../../../forms/components/FormInput/FormInput";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../../store/store";
import {login, logout} from "../../../../reducers/authReducer";
import {useFormik} from "formik";


type FormikErrorType = {
    email?: string
    password?: string
}

const LogIn = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const errorStatus = useAppSelector<boolean>(state => state.auth.loginError)

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
                       {...formik.getFieldProps('password')}
                       name="password"
                       placeholder={'Введите пароль'}
                       onBlur={formik.handleBlur}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                       type={'password'}
                       password={true}
                       errorText={formik.errors.password}
                       error={formik.errors.password &&
                       formik.touched.password || errorStatus}/>
            <div className={s.form__row} style={{marginTop: '24px'}}>
                <button type="submit" className={s.button}>Вход</button>
                <button type={'button'}  className={s.recovery}>Забыли пароль?</button>
            </div>
        </form>
    );
};

export default LogIn;