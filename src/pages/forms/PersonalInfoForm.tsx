import React from 'react';
import s from "./Form.module.scss";
import Input from "../components/Input/Input";
import Button from "../components/button/Button";
import {useDispatch} from "react-redux";
import {addPrivateData, choicePartner, RegistrationDataType} from "../../reducers/registrationReducer";
import {useFormik} from "formik";
import {AppDispatchType, useAppSelector} from "../../store/store";


type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: (hide: boolean) => void
}

type FormikErrorType = {
    last_name?: string
    first_name?: string
    parent?: string
    date_birth?: string
    phone?: string
}

const PersonalInfoForm = (props: PropsType) => {
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const dispatch = useDispatch<AppDispatchType>()
    const leaveReg = () => {
        dispatch(choicePartner(null))
        props.leaveReg(false)
    }
    const formik = useFormik({
        initialValues: {
            last_name: data.last_name,
            first_name: data.first_name,
            parent: data.parent,
            date_birth: data.date_birth,
            phone: data.phone,
            partner: '1'
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.first_name) {
                errors.first_name = 'Поле обязательно для заполнения';
            }
            if (!values.last_name) {
                errors.last_name = 'Поле обязательно для заполнения';
            }
            if (!values.parent) {
                errors.parent = 'Поле обязательно для заполнения';
            }
            if (!values.date_birth) {
                errors.date_birth = 'Поле обязательно для заполнения';
            }
            if (!values.phone) {
                errors.phone = 'Поле обязательно для заполнения';
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
                caption={'Дата рождения'}
                placeholder={'ДД.ММ.ГГГГ'}
                {...formik.getFieldProps('date_birth')}
                error={formik.errors.date_birth && formik.touched.date_birth}
                errorText={formik.errors.date_birth}
            />
            <Input
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