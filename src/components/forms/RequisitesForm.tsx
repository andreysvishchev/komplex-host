import React from 'react';
import s from "./Form.module.scss";
import Input from "../Input/Input";
import {useFormik} from "formik";
import Button from "../button/Button";
import {addPrivateData, RegistrationDataType} from "../../store/registrationReducer";
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
            bank_corps: data.bank_corps,
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
            if (!values.bank_locality) {
                errors.bank_locality = 'Поле обязательно для заполнения';
            }
            if (!values.bank_home) {
                errors.bank_home = 'Поле обязательно для заполнения';
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
                <Input
                    caption={'Наименование банка'}
                    placeholder={'Введите название'}
                    {...formik.getFieldProps('bank')}
                    error={formik.errors.bank && formik.touched.bank}
                    errorText={formik.errors.bank}
                />
                <Input
                    caption={'Расчетный счет'}
                    placeholder={'Номер рас/сч'}
                    {...formik.getFieldProps('payment_score')}
                    error={formik.errors.payment_score && formik.touched.payment_score}
                    errorText={formik.errors.payment_score}
                />
                <Input
                    caption={'Корреспондентский счет'}
                    placeholder={'Номер кор/сч'}
                    {...formik.getFieldProps('correspondent_score')}
                    error={formik.errors.correspondent_score && formik.touched.correspondent_score}
                    errorText={formik.errors.correspondent_score}
                />
                <div className={s.form__row}>
                    <Input
                        caption={'Индекс'}
                        placeholder={'_ _ _ _ _ _'}
                        {...formik.getFieldProps('bank_index')}
                        error={formik.errors.bank_index && formik.touched.bank_index}
                        errorText={formik.errors.bank_index}
                    />
                    <Input
                        caption={'Страна'}
                        placeholder={'Введите страну'}
                        {...formik.getFieldProps('bank_country')}
                        error={formik.errors.bank_country && formik.touched.bank_country}
                        errorText={formik.errors.bank_country}
                    />
                </div>
                <Input
                    caption={'Область'}
                    placeholder={'Введите область'}
                    {...formik.getFieldProps('bank_area')}
                    error={formik.errors.bank_area && formik.touched.bank_area}
                    errorText={formik.errors.bank_area}
                />
                <Input
                    caption={'Район/Округ'}
                    placeholder={'Введите район или округ'}
                    {...formik.getFieldProps('bank_district')}
                />
                <Input
                    caption={'Населенный пункт'}
                    placeholder={'Введите населенный пункт'}
                    {...formik.getFieldProps('bank_locality')}
                    error={formik.errors.bank_locality && formik.touched.bank_locality}
                    errorText={formik.errors.bank_locality}
                />
                <Input
                    caption={'Улица'}
                    placeholder={'Введите улицу'}
                    {...formik.getFieldProps('bank_street')}
                    value={formik.values.bank_street}
                />
                <Input
                    caption={'Дом'}
                    placeholder={'Номер дома'}
                    {...formik.getFieldProps('bank_home')}
                    value={formik.values.bank_home}
                    error={formik.errors.bank_home && formik.touched.bank_home}
                    errorText={formik.errors.bank_home}
                />
                <Input
                    caption={'Корпус'}
                    placeholder={'Номер корпуса'}
                    {...formik.getFieldProps('bank_corps')}
                    value={formik.values.bank_corps}
                />
                <Input
                    caption={'Офис'}
                    placeholder={'Офиса'}
                    {...formik.getFieldProps('bank_office')}
                    value={formik.values.bank_office}
                />

                {
                    props.registration
                        ?
                        <div className={s.form__buttons}>
                            <Button light={true} callBack={props.prevPage} type={"button"}
                                    title={'Назад'}/>
                            <Button title={'Далее'} type={'submit'}/>
                        </div>
                        :
                        <div style={{marginTop: '32px'}}>
                            <Button title={'Отправить запрос на изменение'}
                                    type={'submit'}/>
                        </div>
                }

            </form>
        </div>
    );
};

export default RequisitesForm;