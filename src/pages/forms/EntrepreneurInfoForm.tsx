import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {choicePartner} from "../../reducers/registrationReducer";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import Button from "../personal-account/components/button/Button";
import {useFormik} from "formik";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}
type FormikErrorType = {
    inn?: string
    nameIp?: string
    firstName?: string
    lastName?: string
    parent?: string
}

const EntrepreneurInfoForm = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            inn: '',
            nameIp: '',
            firstName: '',
            lastName: '',
            parent: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            }else if (!/^\d+$/i.test(values.inn)) {
                errors.inn = 'Поле может содержать только цифры';
            }
            if (!values.nameIp) {
                errors.nameIp = 'Поле обязательно для заполнения';
            }
            if (!values.firstName) {
                errors.firstName = 'Поле обязательно для заполнения';
            }
            if (!values.lastName) {
                errors.lastName = 'Поле обязательно для заполнения';
            }
            if (!values.parent) {
                errors.parent = 'Поле обязательно для заполнения';
            }
            return errors;
        },
        onSubmit: values => {
            props.nextPage()
            console.log(values)
            formik.resetForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className={props.registration ? `${s.registration} ${s.form}` : s.form}>
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
                {...formik.getFieldProps('nameIp')}
                error={formik.errors.nameIp && formik.touched.nameIp}
                errorText={formik.errors.nameIp}
            />
            <FormInput
                caption={'Фамилия'}
                placeholder={'Введите фамилию'}
                {...formik.getFieldProps('firstName')}
                error={formik.errors.firstName && formik.touched.firstName}
                errorText={formik.errors.firstName}
            />
            <FormInput
                caption={'Имя'}
                placeholder={'Введите имя'}
                {...formik.getFieldProps('lastName')}
                error={formik.errors.lastName && formik.touched.lastName}
                errorText={formik.errors.lastName}
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