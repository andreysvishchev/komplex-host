import React from 'react';
import s from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../button/Button";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {addPrivateData, choicePartner, RegistrationDataType} from "../../store/registrationReducer";
import {useFormik} from "formik";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}
type FormikErrorType = {
    inn?: string
    company_name?: string
    kpp?: string
}

const CompanyInfoForm = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            inn: data.inn,
            company_name: data.company_name,
            kpp: data.kpp,
            partner: '3'
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
            if (!values.kpp) {
                errors.kpp = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.kpp)) {
                errors.kpp = 'Поле может содержать только цифры';
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
        <form onSubmit={formik.handleSubmit} className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <input disabled={true} className={s.hidden} {...formik.getFieldProps('partner')} />
            <Input
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <button type={'button'} className={s.fill}>Заполнить по ИНН</button>
            <Input
                caption={'Наименование Органищации'}
                placeholder={'Введите название'}
                {...formik.getFieldProps('company_name')}
                error={formik.errors.company_name && formik.touched.company_name}
                errorText={formik.errors.company_name}
            />
            <Input caption={'КПП'}
                   placeholder={' Номер КПП'}
                   {...formik.getFieldProps('kpp')}
                   error={formik.errors.kpp && formik.touched.kpp}
                   errorText={formik.errors.kpp}
            />
            <div className={s.form__buttons}>
                <Button light={true} callBack={leaveReg} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default CompanyInfoForm;