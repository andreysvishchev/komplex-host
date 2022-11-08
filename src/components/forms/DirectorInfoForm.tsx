import React from 'react';
import {AppDispatchType, useAppSelector} from "../../store/store";
import {
    addPrivateData,
    RegistrationDataType
} from "../../store/registrationReducer";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import s from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../button/Button";


type FormikErrorType = {
    d_last_name?: string
    d_first_name?: string
    d_parent?: string
    post?: string
    email?: string
}

type PropsType = {
    nextPage: () => void
    prevPage: () => void

}

const DirectorInfoForm = (props: PropsType) => {
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const dispatch = useDispatch<AppDispatchType>()


    const formik = useFormik({
        initialValues: {
            d_last_name: data.d_last_name,
            d_first_name: data.d_first_name,
            d_parent: data.d_parent,
            email: data.email,
            post: data.post
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.d_first_name) {
                errors.d_first_name = 'Поле обязательно для заполнения';
            }
            if (!values.d_last_name) {
                errors.d_last_name = 'Поле обязательно для заполнения';
            }
            if (!values.d_parent) {
                errors.d_parent = 'Поле обязательно для заполнения';
            }
            if (!values.post) {
                errors.post = 'Поле обязательно для заполнения';
            }
            if (!values.email) {
                errors.email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Email указан некорректно';
            }


            return errors;
        },
        onSubmit: values => {
            dispatch(addPrivateData(Object.assign(data, values)))
            console.log(data)
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
            props.nextPage()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <input disabled={true} className={s.hidden} {...formik.getFieldProps('partner')} />
            <Input
                caption={'Фамилия'}
                placeholder={'Введите фамилию'}
                {...formik.getFieldProps('d_last_name')}
                error={formik.errors.d_last_name && formik.touched.d_last_name}
                errorText={formik.errors.d_last_name}
            />
            <Input
                caption={'Имя'}
                placeholder={'Введите имя'}
                {...formik.getFieldProps('d_first_name')}
                error={formik.errors.d_first_name && formik.touched.d_first_name}
                errorText={formik.errors.d_first_name}
            />
            <Input
                caption={'Отчество'}
                placeholder={'Введите отчество'}
                {...formik.getFieldProps('d_parent')}
                error={formik.errors.d_parent && formik.touched.d_parent}
                errorText={formik.errors.d_parent}
            />
            <Input
                caption={'Должность'}
                placeholder={'Введите должность'}
                {...formik.getFieldProps('post')}
                error={formik.errors.post && formik.touched.post}
                errorText={formik.errors.post}
            />
            <Input caption={'Электронная почта'}
                   errorText={formik.errors.email}
                   error={formik.errors.email &&
                   formik.touched.email}
                   {...formik.getFieldProps('email')}
                   placeholder={'Введите e-mail'}/>
            <div className={s.form__buttons}>
                <Button light={true} callBack={props.prevPage}
                        type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default DirectorInfoForm;