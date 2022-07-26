import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {addPrivateData, choicePartner} from "../../reducers/registrationReducer";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import Button from "../personal-account/components/button/Button";
import {useFormik} from "formik";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}
type FormikErrorType = {
    inn?: string
    ip_name?: string
    first_name?: string
    last_name?: string
    parent?: string
}

const EntrepreneurInfoForm = (props: PropsType) => {
    const data = useAppSelector(state=> state.registration.registrationData)
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            inn: data.inn,
            ip_name: data.ip_name,
            last_name: data.last_name,
            first_name: data.first_name,
            parent: data.parent,
            partner: 2
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            }else if (!/^\d+$/i.test(values.inn)) {
                errors.inn = 'Поле может содержать только цифры';
            }
            if (!values.ip_name) {
                errors.ip_name = 'Поле обязательно для заполнения';
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
        <form onSubmit={formik.handleSubmit} className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <input disabled={true} className={s.hidden} {...formik.getFieldProps('partner')} />
            <FormInput
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                maxLength={12}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <button type={'button'} className={s.fill}>Заполнить по ИНН</button>
            <FormInput
                caption={'Наименование ИП'}
                placeholder={'Введите название'}
                {...formik.getFieldProps('ip_name')}
                error={formik.errors.ip_name && formik.touched.ip_name}
                errorText={formik.errors.ip_name}
            />
            <FormInput
                caption={'Фамилия'}
                placeholder={'Введите фамилию'}
                {...formik.getFieldProps('last_name')}
                error={formik.errors.last_name && formik.touched.last_name}
                errorText={formik.errors.last_name}
            />
            <FormInput
                caption={'Имя'}
                placeholder={'Введите имя'}
                {...formik.getFieldProps('first_name')}
                error={formik.errors.first_name && formik.touched.first_name}
                errorText={formik.errors.first_name}
            />
            <FormInput
                caption={'Отчество'}
                placeholder={'Введите отчество'}
                {...formik.getFieldProps('parent')}
                error={formik.errors.parent && formik.touched.parent}
                errorText={formik.errors.parent}
            />
            <div className={s.form__buttons}>
                <Button light={true} callBack={leaveReg} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default EntrepreneurInfoForm;