import React from 'react';
import s from "./Form.module.scss";
import Input from "../components/Input/Input";
import {addPrivateData, choicePartner} from "../../reducers/registrationReducer";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import Button from "../components/button/Button";
import {useFormik} from "formik";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}
type FormikErrorType = {
    inn?: string
    company_name?: string
    first_name?: string
    last_name?: string
    parent?: string
    email?: string
}

const EntrepreneurInfoForm = (props: PropsType) => {
    const data = useAppSelector(state => state.registration.registrationData)
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            inn: data.inn,
            company_name: data.company_name,
            last_name: data.last_name,
            first_name: data.first_name,
            parent: data.parent,
            email: data.email,
            partner: 2
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.inn)) {
                errors.inn = 'Поле может содержать только цифры';
            }
            if (!values.company_name) {
                errors.company_name = 'Поле обязательно для заполнения';
            }
            if (!values.first_name) {
                errors.first_name = 'Поле обязательно для заполнения';
            }
            if (!values.last_name) {
                errors.last_name = 'Поле обязательно для заполнения';
            }
            if (!values.parent) {
                errors.parent = 'Поле обязательно для заполнения';
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
            props.nextPage()
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}
              className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <input disabled={true}
                   className={s.hidden} {...formik.getFieldProps('partner')} />
            <Input
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <button type={'button'} className={s.fill}>Заполнить по ИНН</button>
            <Input
                caption={'Наименование ИП'}
                placeholder={'Введите название'}
                {...formik.getFieldProps('company_name')}
                error={formik.errors.company_name && formik.touched.company_name}
                errorText={formik.errors.company_name}
            />
            <Input
                caption={'Фамилия'}
                placeholder={'Введите фамилию'}
                {...formik.getFieldProps('last_name')}
                error={formik.errors.last_name && formik.touched.last_name}
                errorText={formik.errors.last_name}
            />
            <Input
                caption={'Имя'}
                placeholder={'Введите имя'}
                {...formik.getFieldProps('first_name')}
                error={formik.errors.first_name && formik.touched.first_name}
                errorText={formik.errors.first_name}
            />
            <Input
                caption={'Отчество'}
                placeholder={'Введите отчество'}
                {...formik.getFieldProps('parent')}
                error={formik.errors.parent && formik.touched.parent}
                errorText={formik.errors.parent}
            />
            <Input
                caption={'Электронная почта'}
                errorText={formik.errors.email}
                error={formik.errors.email &&
                formik.touched.email}
                {...formik.getFieldProps('email')}
                placeholder={'Введите e-mail'}/>
            <div className={s.form__buttons}>
                <Button light={true} callBack={leaveReg} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default EntrepreneurInfoForm;