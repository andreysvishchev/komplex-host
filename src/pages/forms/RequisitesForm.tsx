import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {useFormik} from "formik";
import {openModalAC} from "../../reducers/modal-reducer";
import Button from "../personal-account/components/button/Button";

type PropsType = {
    registration?: boolean
    prevPage?: () => void
    nextPage?: () => void
}

type FormikErrorType = {
    bank?: string
    paymentScore?: string
    correspondentScore?: string
    index?: string
    country?: string
    area?: string
    district?: string
    locality?: string
    street?: string
    home?: string
    office?: string
}

const RequisitesForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            bank: '',
            paymentScore: '',
            correspondentScore: '',
            index: '',
            country: '',
            area: '',
            district: '',
            locality: '',
            street: '',
            home: '',
            office: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.bank) {
                errors.bank = 'Поле обязательно для заполнения';
            }
            if (!values.paymentScore) {
                errors.paymentScore = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.paymentScore)) {
                errors.paymentScore = 'Поле может содержать только цифры';
            }
            if (!values.correspondentScore) {
                errors.correspondentScore = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.correspondentScore)) {
                errors.correspondentScore = 'Поле может содержать только цифры';
            }
            if (!values.index) {
                errors.index = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.index)) {
                errors.index = 'Поле может содержать только цифры';
            }
            if (!values.country) {
                errors.country = 'Поле обязательно для заполнения';
            }
            if (!values.area) {
                errors.area = 'Поле обязательно для заполнения';
            }
            if (!values.district) {
                errors.district = 'Поле обязательно для заполнения';
            }
            if (!values.locality) {
                errors.locality = 'Поле обязательно для заполнения';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
            if (props.nextPage) {
                props.nextPage()
            }
            formik.resetForm()
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
                    {...formik.getFieldProps('paymentScore')}
                    error={formik.errors.paymentScore && formik.touched.paymentScore}
                    errorText={formik.errors.paymentScore}
                />
                <FormInput
                    caption={'Корреспондентский счет'}
                    placeholder={'Номер кор/сч'}
                    maxLength={20}
                    {...formik.getFieldProps('correspondentScore')}
                    error={formik.errors.correspondentScore && formik.touched.correspondentScore}
                    errorText={formik.errors.correspondentScore}
                />
                <div className={s.form__row}>
                    <FormInput
                        caption={'Индекс'}
                        placeholder={'_ _ _ _ _ _'}
                        {...formik.getFieldProps('index')}
                        error={formik.errors.index && formik.touched.index}
                        errorText={formik.errors.index}
                    />
                    <FormInput
                        caption={'Страна'}
                        placeholder={'Введите страну'}
                        {...formik.getFieldProps('country')}
                        error={formik.errors.country && formik.touched.country}
                        errorText={formik.errors.country}
                    />
                </div>
                <FormInput
                    caption={'Область'}
                    placeholder={'Введите область'}
                    {...formik.getFieldProps('area')}
                    error={formik.errors.area && formik.touched.area}
                    errorText={formik.errors.area}
                />
                <FormInput
                    caption={'Район/Округ'}
                    placeholder={'Введите район или округ'}
                    {...formik.getFieldProps('district')}
                    error={formik.errors.district && formik.touched.district}
                    errorText={formik.errors.district}
                />
                <FormInput
                    caption={'Населенный пункт'}
                    placeholder={'Введите населенный пункт'}
                    {...formik.getFieldProps('locality')}
                    error={formik.errors.locality && formik.touched.locality}
                    errorText={formik.errors.locality}
                />
                <FormInput
                    caption={'Улица'}
                    placeholder={'Введите улицу'}
                    {...formik.getFieldProps('street')}
                    name="street"
                    value={formik.values.street}
                />
                <div className={s.form__row}>
                    <FormInput
                        caption={'Дом'}
                        placeholder={'Номер дома'}
                        {...formik.getFieldProps('home')}
                        name="home"
                        value={formik.values.home}
                    />
                    <FormInput
                        caption={'Корпус/офис'}
                        placeholder={'Номер корпуса/офиса'}
                        {...formik.getFieldProps('office')}
                        name="flat"
                        value={formik.values.office}
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