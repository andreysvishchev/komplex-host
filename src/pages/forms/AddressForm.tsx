import s from './Form.module.scss'
import FormInput from "./components/FormInput/FormInput";
import {button, theme} from "../../style/style";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modal-reducer";
import Checkbox from "./components/Checkbox/Checkbox";
import {useFormik} from "formik";
import {login} from "../../reducers/authReducer";
import Button from "../personal-account/components/button/Button";

type PropsType = {
    prevPage?: () => void
    nextPage?: () => void
    registration?: boolean
    lastStep?: boolean
}

type FormikErrorType = {
    index?: string
    country?: string
    area?: string
    district?: string
    locality?: string
    street?: string
    home?: string
    flat?: string
}

const AddressForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            index: '',
            country: '',
            area: '',
            district: '',
            locality: '',
            street: '',
            home: '',
            flat: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
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
            if (props.lastStep) {
                dispatch(openModalAC(true, true, 'Запрос на создание контрагента отправлен в техподдержку'))
            } else {
                if (props.nextPage) {
                    props.nextPage()
                }
            }
            formik.resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={props.registration ? `${s.registration} ${s.form}` : s.form}>
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
                    caption={props.lastStep ? 'Квартира' : 'Квартира/офис'}
                    placeholder={props.lastStep ? 'Номер квартиры' : 'Номер квартиры/офиса'}
                    {...formik.getFieldProps('flat')}
                    name="flat"
                    value={formik.values.flat}
                />
            </div>

            {props.registration
                ?
                props.lastStep
                    ?
                    <>
                        <div className={s.agreement}>
                            <Checkbox checked={checked} onChangeChecked={setChecked}/>
                            <div className={s.agreement__text}>
                                Я принимаю условия <a href="/"> Пользовательского соглашения</a> и даю своё согласие
                                Komplex-Host на обработку моей персональной информации на условиях, определенных
                                <a href="/"> Политикой конфиденциальности.</a>
                            </div>
                        </div>
                        <div className={s.form__buttons}>
                            <Button light={true} callBack={props.prevPage} type={"button"} title={'Назад'}/>
                            <Button title={'Завершить регистрацию'} type={'submit'} disabled={!checked}/>
                        </div>
                    </>
                    :
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

export default AddressForm;
