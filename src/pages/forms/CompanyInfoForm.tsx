import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import Button from "../personal-account/components/button/Button";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {choicePartner} from "../../reducers/registrationReducer";
import {useFormik} from "formik";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}
type FormikErrorType = {
    inn?: string
    nameOrg?: string
    kpp?: string
}

const CompanyInfoForm = (props: PropsType) => {
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            inn: '',
            nameOrg: '',
            kpp: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.inn)) {
                errors.inn = 'Поле может содержать только цифры';
            }
            if (!values.nameOrg) {
                errors.nameOrg = 'Поле обязательно для заполнения';
            }
            if (!values.kpp) {
                errors.kpp = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.kpp)) {
                errors.kpp = 'Поле может содержать только цифры';
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
                caption={'Наименование Органищации'}
                placeholder={'Введите название'}
                {...formik.getFieldProps('nameOrg')}
                error={formik.errors.nameOrg && formik.touched.nameOrg}
                errorText={formik.errors.nameOrg}
            />
            <FormInput caption={'КПП'}
                       placeholder={' Номер КПП'}
                       maxLength={9}
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