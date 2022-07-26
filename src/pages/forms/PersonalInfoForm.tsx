import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import Button from "../personal-account/components/button/Button";
import {useDispatch} from "react-redux";
import {addPrivateData, choicePartner} from "../../reducers/registrationReducer";
import {useFormik} from "formik";
import {AppDispatchType, useAppSelector} from "../../store/store";


type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}

type FormikErrorType = {
    firstName?: string
    lastName?: string
    parent?: string
    dateOfBirth?: string
    phone?: string
}

const PersonalInfoForm = (props: PropsType) => {
    const data = useAppSelector(state => state.registration.privateData)
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            firstName: data.firstName,
            lastName: data.lastName,
            parent: data.parent,
            dateOfBirth: data.dateOfBirth,
            phone: data.phone
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.firstName) {
                errors.firstName = 'Поле обязательно для заполнения';
            }
            if (!values.lastName) {
                errors.lastName = 'Поле обязательно для заполнения';
            }
            if (!values.parent) {
                errors.parent = 'Поле обязательно для заполнения';
            }
            if (!values.dateOfBirth) {
                errors.dateOfBirth = 'Поле обязательно для заполнения';
            }
            if (!values.phone) {
                errors.phone = 'Поле обязательно для заполнения';
            }

            return errors;
        },
        onSubmit: values => {
            /*      const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(values))))*/
       dispatch(addPrivateData(Object.assign(data, values)))

            console.log(data)
            /*console.log(decodeURIComponent(escape(window.atob(valueStr))))*/
            props.nextPage()

        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={props.registration ? `${s.registration} ${s.form}` : s.form}>
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
            <FormInput
                caption={'Дата рождения'}
                placeholder={'ДД.ММ.ГГГГ'}
                {...formik.getFieldProps('dateOfBirth')}
                error={formik.errors.dateOfBirth && formik.touched.dateOfBirth}
                errorText={formik.errors.dateOfBirth}
            />
            <FormInput
                caption={'Номер телефона'}
                type={'tel'}
                placeholder={'Введите телефон'}
                {...formik.getFieldProps('phone')}
                error={formik.errors.phone && formik.touched.phone}
                errorText={formik.errors.phone}
            />
            <div className={s.form__buttons}>
                <Button light={true} callBack={leaveReg} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>
        </form>
    );
};

export default PersonalInfoForm;