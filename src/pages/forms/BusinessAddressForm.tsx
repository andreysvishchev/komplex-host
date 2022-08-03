import s from './Form.module.scss'
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modalReducer";
import Checkbox from "./components/Checkbox/Checkbox";
import {useFormik} from "formik";
import Button from "../personal-account/components/button/Button";
import {useAppSelector} from "../../store/store";
import {addPrivateData, RegistrationDataType} from "../../reducers/registrationReducer";

type PropsType = {
    prevPage: () => void
    nextPage: () => void
    registration?: boolean
}

type FormikErrorType = {
    business_index?: string
    business_country?: string
    business_area?: string
    business_district?: string
    business_locality?: string
    business_street?: string
    business_home?: string
    business_flat?: string
}

const BusinessAddressForm = (props: PropsType) => {
    const dispatch = useDispatch()

    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const formik = useFormik({
        initialValues: {
            business_index: data.business_index,
            business_country: data.business_country,
            business_area: data.business_area,
            business_district: data.business_district,
            business_locality: data.business_locality,
            business_street: data.business_street,
            business_home: data.business_home,
            business_flat: data.business_flat,
            create_application: true
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.business_index) {
                errors.business_index = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.business_index)) {
                errors.business_index = 'Поле может содержать только цифры';
            }
            if (!values.business_country) {
                errors.business_country = 'Поле обязательно для заполнения';
            }
            if (!values.business_area) {
                errors.business_area = 'Поле обязательно для заполнения';
            }
            if (!values.business_district) {
                errors.business_district = 'Поле обязательно для заполнения';
            }
            if (!values.business_locality) {
                errors.business_locality = 'Поле обязательно для заполнения';
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
            <div className={s.form__row}>
                <FormInput
                    caption={'Индекс'}
                    placeholder={'_ _ _ _ _ _'}
                    {...formik.getFieldProps('business_index')}
                    error={formik.errors.business_index && formik.touched.business_index}
                    errorText={formik.errors.business_index}
                />
                <FormInput
                    caption={'Страна'}
                    placeholder={'Введите страну'}
                    {...formik.getFieldProps('business_country')}
                    error={formik.errors.business_country && formik.touched.business_country}
                    errorText={formik.errors.business_country}
                />
            </div>
            <FormInput
                caption={'Область'}
                placeholder={'Введите область'}
                {...formik.getFieldProps('business_area')}
                error={formik.errors.business_area && formik.touched.business_area}
                errorText={formik.errors.business_area}
            />
            <FormInput
                caption={'Район/Округ'}
                placeholder={'Введите район или округ'}
                {...formik.getFieldProps('business_district')}
                error={formik.errors.business_district && formik.touched.business_district}
                errorText={formik.errors.business_district}
            />
            <FormInput
                caption={'Населенный пункт'}
                placeholder={'Введите населенный пункт'}
                {...formik.getFieldProps('business_locality')}
                error={formik.errors.business_locality && formik.touched.business_locality}
                errorText={formik.errors.business_locality}
            />
            <FormInput
                caption={'Улица'}
                placeholder={'Введите улицу'}
                {...formik.getFieldProps('business_street')}
                value={formik.values.business_street}
            />
            <div className={s.form__row}>
                <FormInput
                    caption={'Дом'}
                    placeholder={'Номер дома'}
                    {...formik.getFieldProps('business_home')}
                    value={formik.values.business_home}
                />
                <FormInput
                    caption={'Квартира/офис'}
                    placeholder={'Номер квартиры/офиса'}
                    {...formik.getFieldProps('business_flat')}
                    value={formik.values.business_flat}
                />
            </div>

            {props.registration
                ?
                <div style={{marginTop: '12px'}} className={s.form__buttons}>
                    <Button light={true} callBack={props.prevPage} type={"button"} title={'Назад'}/>
                    <Button title={'Далее'} type={'submit'}/>
                </div>
                :
                <div style={{marginTop: '12px'}}>
                    <Button title={'Отправить запрос на изменение'} type={'submit'}/>
                </div>

            }
        </form>
    );
};

export default BusinessAddressForm;
