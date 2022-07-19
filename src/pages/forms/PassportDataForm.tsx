import React, {ChangeEvent, useRef, useState} from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import {useFormik} from "formik";
import Button from "../personal-account/components/button/Button";
import Textarea from "./components/Textarea/Textarea";
import Input from "@mui/material/Input";
import styled from "@mui/material/styles/styled";
import InputFile from "./components/InputFile/InputFile";

type PropsType = {
    prevPage: () => void
    nextPage: () => void
    registration: boolean
}

type FormikErrorType = {
    series?: string
    number?: string
    placeOfIssue?: string
    dateOfIssue?: string
    inn?: string
    scan_main?: string
    scan_reg?: string
}

const PassportDataForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            series: '',
            number: '',
            placeOfIssue: '',
            dateOfIssue: '',
            inn: '',
            scan_main: '',
            scan_reg: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.series) {
                errors.series = 'Поле обязательно для заполнения';
            }
            if (!values.number) {
                errors.number = 'Поле обязательно для заполнения';
            }
            if (!values.placeOfIssue) {
                errors.placeOfIssue = 'Поле обязательно для заполнения';
            }
            if (!values.dateOfIssue) {
                errors.dateOfIssue = 'Поле обязательно для заполнения';
            }
            if (!values.inn) {
                errors.inn = 'Поле обязательно для заполнения';
            }
            if (!values.scan_main) {
                errors.scan_main = 'Прикрпеите скан пасспорта';
            }
            if (!values.scan_reg) {
                errors.scan_reg = 'Прикрпеите скан пасспорта';
            }
            return errors;
        },
        onSubmit: values => {
            props.nextPage()
            let valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(values))))
            console.log(valueStr)
            console.log(decodeURIComponent(escape(window.atob(valueStr))))
            console.log(values)
            formik.resetForm()

        },
    })

    const [name, setName] = useState('Добавить')
    const [nameTwo, setNameTwo] = useState('Добавить')

    const changeMainScan = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setName(e.target.files[0].name)
            let file = e.target.files[0];
            const base64 = await convertBase64(file)
            await formik.setFieldValue("scan_main", base64);
        }
    }
    const changeRegistrationScan = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setNameTwo(e.target.files[0].name)
            let file = e.target.files[0];
            const base64 = await convertBase64(file)
            await formik.setFieldValue("scan_reg", base64);
        }
    }
    const convertBase64 = (file: any) => {
        return new Promise(resolve => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
        })
    }

    return (
        <form onSubmit={formik.handleSubmit}
              className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <div className={s.form__row}>
                <FormInput
                    maxLength={4}
                    caption={'Серия'}
                    placeholder={'_ _ _ _'}
                    {...formik.getFieldProps('series')}
                    error={formik.errors.series && formik.touched.series}
                    errorText={formik.errors.series}/>
                <FormInput
                    caption={'Номер'}
                    placeholder={'_ _ _ _ _ _'}
                    maxLength={6}
                    {...formik.getFieldProps('number')}
                    error={formik.errors.number && formik.touched.number}
                    errorText={formik.errors.number}/>
            </div>
            <Textarea
                placeholder={'Введите кем выдан паспорт'}
                caption={'Кем выдан'}
                error={formik.errors.placeOfIssue && formik.touched.placeOfIssue}
                errorText={formik.errors.placeOfIssue}
                {...formik.getFieldProps('placeOfIssue')}
            />
            <FormInput
                caption={'Дата выдачи'}
                placeholder={'ДД.ММ.ГГГГ'}
                {...formik.getFieldProps('dateOfIssue')}
                error={formik.errors.dateOfIssue && formik.touched.dateOfIssue}
                errorText={formik.errors.dateOfIssue}/>
            <FormInput
                caption={'ИНН'}
                placeholder={'Номер ИНН'}
                maxLength={12}
                {...formik.getFieldProps('inn')}
                error={formik.errors.inn && formik.touched.inn}
                errorText={formik.errors.inn}
            />
            <div className={s.form__caption}>Скан паспорта</div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.one}`}>
                    <div className={s.file__title}>Скан разворота</div>
                    <input onChange={changeMainScan} className={s.file__input} accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{name}</span>
                </label>
                {formik.errors.scan_main && formik.touched.scan_main &&
                <div className={s.input__error}>{formik.errors.scan_main}</div>}
            </div>
            <div className={s.form__scan}>
                <label className={`${s.file} ${s.two}`}>
                    <div className={s.file__title}>Скан прописки</div>
                    <input onChange={changeRegistrationScan} className={s.file__input} accept='image/jpeg, image/png'
                           type="file"/>
                    <span className={s.file__label}>{nameTwo}</span>
                </label>
                {formik.errors.scan_reg && formik.touched.scan_reg &&
                <div className={s.input__error}>{formik.errors.scan_reg}</div>}
            </div>

            <div className={s.form__buttons}>
                <Button light={true} callBack={props.prevPage} type={"button"} title={'Назад'}/>
                <Button title={'Далее'} type={'submit'}/>
            </div>

        </form>
    );
};

export default PassportDataForm;