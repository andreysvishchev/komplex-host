import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {useFormik} from "formik";
import Button from "../personal-account/components/button/Button";
import {addPrivateData, RegistrationDataType} from "../../reducers/registrationReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../store/store";

type PropsType = {
    registration?: boolean
    prevPage?: () => void
    nextPage?: () => void
}

type FormikErrorType = {
    bank?: string
    payment_score?: string
    correspondent_score?: string
    bank_index?: string
    bank_country?: string
    bank_area?: string
    bank_district?: string
    bank_locality?: string
    bank_street?: string
    bank_home?: string
    bank_office?: string
}

const RequisitesForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)

    const formik = useFormik({
        initialValues: {
            bank: data.bank,
            payment_score: data.payment_score,
            correspondent_score: data.correspondent_score,
            bank_index: data.bank_index,
            bank_country: data.bank_country,
            bank_area: data.bank_area,
            bank_district: data.bank_district,
            bank_locality: data.bank_locality,
            bank_street: data.bank_street,
            bank_home: data.bank_home,
            bank_office: data.bank_office
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.bank) {
                errors.bank = 'Поле обязательно для заполнения';
            }
            if (!values.payment_score) {
                errors.payment_score = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.payment_score)) {
                errors.payment_score = 'Поле может содержать только цифры';
            }
            if (!values.correspondent_score) {
                errors.correspondent_score = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.correspondent_score)) {
                errors.correspondent_score = 'Поле может содержать только цифры';
            }
            if (!values.bank_index) {
                errors.bank_index = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.bank_index)) {
                errors.bank_index = 'Поле может содержать только цифры';
            }
            if (!values.bank_country) {
                errors.bank_country = 'Поле обязательно для заполнения';
            }
            if (!values.bank_area) {
                errors.bank_area = 'Поле обязательно для заполнения';
            }
            if (!values.bank_district) {
                errors.bank_district = 'Поле обязательно для заполнения';
            }
            if (!values.bank_locality) {
                errors.bank_locality = 'Поле обязательно для заполнения';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addPrivateData(Object.assign(data, values)))
            console.log(data)
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
            if (props.nextPage) {
                props.nextPage()
            }
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}
                  className={props.registration ? `${s.registration} ${s.form}` : s.form}>
                <FormInput
                    caption={'Наименование банка'}
                    placeholder={'Введите название'}
                    {...formik.getFieldProps('bank')}
                    error={formik.errors.bank && formik.touched.bank}
                    errorText={formik.errors.bank}
                />
                <FormInput
                    caption={'Расчетный счет'}
                    placeholder={'Номер рас/сч'}
                    maxLength={20}
                    {...formik.getFieldProps('payment_score')}
                    error={formik.errors.payment_score && formik.touched.payment_score}
                    errorText={formik.errors.payment_score}
                />
                <FormInput
                    caption={'Корреспондентский счет'}
                    placeholder={'Номер кор/сч'}
                    maxLength={20}
                    {...formik.getFieldProps('correspondent_score')}
                    error={formik.errors.correspondent_score && formik.touched.correspondent_score}
                    errorText={formik.errors.correspondent_score}
                />
                <div className={s.form__row}>
                    <FormInput
                        caption={'Индекс'}
                        placeholder={'_ _ _ _ _ _'}
                        {...formik.getFieldProps('bank_index')}
                        error={formik.errors.bank_index && formik.touched.bank_index}
                        errorText={formik.errors.bank_index}
                    />
                    <FormInput
                        caption={'Страна'}
                        placeholder={'Введите страну'}
                        {...formik.getFieldProps('bank_country')}
                        error={formik.errors.bank_country && formik.touched.bank_country}
                        errorText={formik.errors.bank_country}
                    />
                </div>
                <FormInput
                    caption={'Область'}
                    placeholder={'Введите область'}
                    {...formik.getFieldProps('bank_area')}
                    error={formik.errors.bank_area && formik.touched.bank_area}
                    errorText={formik.errors.bank_area}
                />
                <FormInput
                    caption={'Район/Округ'}
                    placeholder={'Введите район или округ'}
                    {...formik.getFieldProps('bank_district')}
                    error={formik.errors.bank_district && formik.touched.bank_district}
                    errorText={formik.errors.bank_district}
                />
                <FormInput
                    caption={'Населенный пункт'}
                    placeholder={'Введите населенный пункт'}
                    {...formik.getFieldProps('bank_locality')}
                    error={formik.errors.bank_locality && formik.touched.bank_locality}
                    errorText={formik.errors.bank_locality}
                />
                <FormInput
                    caption={'Улица'}
                    placeholder={'Введите улицу'}
                    {...formik.getFieldProps('bank_street')}
                    value={formik.values.bank_street}
                />
                <div className={s.form__row}>
                    <FormInput
                        caption={'Дом'}
                        placeholder={'Номер дома'}
                        {...formik.getFieldProps('bank_home')}
                        value={formik.values.bank_home}
                    />
                    <FormInput
                        caption={'Корпус/офис'}
                        placeholder={'Номер корпуса/офиса'}
                        {...formik.getFieldProps('bank_office')}
                        value={formik.values.bank_office}
                    />
                </div>
                {
                    props.registration
                        ?
                        <div style={{marginTop: '16px'}} className={s.form__buttons}>
                            <Button light={true} callBack={props.prevPage} type={"button"} title={'Назад'}/>
                            <Button title={'Далее'} type={'submit'}/>
                        </div>
                        :
                        <div style={{marginTop: '12px'}}>
                            <Button title={'Отправить запрос на изменение'} type={'submit'}/>
                        </div>
                }

            </form>
        </div>
    );
};

export default RequisitesForm;