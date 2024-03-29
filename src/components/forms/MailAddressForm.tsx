import s from './Form.module.scss'
import Input from "../Input/Input";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {openNoticeModal} from "../../store/modalReducer";
import Checkbox from "../checkbox/Checkbox";
import {useFormik} from "formik";
import Button from "../button/Button";
import {useAppSelector} from "../../store/store";
import {addPrivateData, RegistrationDataType} from "../../store/registrationReducer";

type PropsType = {
    prevPage?: () => void
    nextPage?: () => void
    registration?: boolean
    lastStep?: boolean
}

type FormikErrorType = {
    mail_index?: string
    mail_country?: string
    mail_area?: string
    mail_locality?: string
    mail_street?: string
    mail_home?: string
    mail_flat?: string
}

const MailAddressForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState<boolean>(false);
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const formik = useFormik({
        initialValues: {
            mail_index: data.mail_index,
            mail_country: data.mail_country,
            mail_area: data.mail_area,
            mail_district: data.mail_district,
            mail_locality: data.mail_locality,
            mail_street: data.mail_street,
            mail_home: data.mail_home,
            mail_corps: data.mail_corps,
            mail_flat: data.mail_flat,
            create_application: true
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.mail_index) {
                errors.mail_index = 'Поле обязательно для заполнения';
            } else if (!/^\d+$/i.test(values.mail_index)) {
                errors.mail_index = 'Поле может содержать только цифры';
            }
            if (!values.mail_country) {
                errors.mail_country = 'Поле обязательно для заполнения';
            }
            if (!values.mail_area) {
                errors.mail_area = 'Поле обязательно для заполнения';
            }
            if (!values.mail_home) {
                errors.mail_home = 'Поле обязательно для заполнения';
            }
            if (!values.mail_locality) {
                errors.mail_locality = 'Поле обязательно для заполнения';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(addPrivateData(Object.assign(data, values)))
            console.log(data)
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
            if (props.lastStep) {
                dispatch(openNoticeModal({
                    open: true,
                    success: true,
                    message: 'Запрос на создание контрагента отправлен в техподдержку'
                }))
            } else {
                if (props.nextPage) {
                    props.nextPage()
                }
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}
              className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <div className={s.form__row}>
                <Input
                    caption={'Индекс'}
                    placeholder={'_ _ _ _ _ _'}
                    {...formik.getFieldProps('mail_index')}
                    error={formik.errors.mail_index && formik.touched.mail_index}
                    errorText={formik.errors.mail_index}
                />
                <Input
                    caption={'Страна'}
                    placeholder={'Введите страну'}
                    {...formik.getFieldProps('mail_country')}
                    error={formik.errors.mail_country && formik.touched.mail_country}
                    errorText={formik.errors.mail_country}
                />
            </div>
            <Input
                caption={'Область'}
                placeholder={'Введите область'}
                {...formik.getFieldProps('mail_area')}
                error={formik.errors.mail_area && formik.touched.mail_area}
                errorText={formik.errors.mail_area}
            />
            <Input
                caption={'Район/Округ'}
                placeholder={'Введите район или округ'}
                {...formik.getFieldProps('mail_district')}
            />
            <Input
                caption={'Населенный пункт'}
                placeholder={'Введите населенный пункт'}
                {...formik.getFieldProps('mail_locality')}
                error={formik.errors.mail_locality && formik.touched.mail_locality}
                errorText={formik.errors.mail_locality}
            />
            <Input
                caption={'Улица'}
                placeholder={'Введите улицу'}
                {...formik.getFieldProps('mail_street')}
                value={formik.values.mail_street}
            />
            <Input
                caption={'Дом'}
                placeholder={'Номер дома'}
                {...formik.getFieldProps('mail_home')}
                value={formik.values.mail_home}
                error={formik.errors.mail_home && formik.touched.mail_home}
                errorText={formik.errors.mail_home}
            />
            <Input
                caption={'Корпус'}
                placeholder={'Номер корпуса'}
                {...formik.getFieldProps('mail_corps')}
                value={formik.values.mail_corps}
            />
            <Input
                caption={props.lastStep ? 'Квартира' : 'Квартира/офис'}
                placeholder={props.lastStep ? 'Номер квартиры' : 'Номер квартиры/офиса'}
                {...formik.getFieldProps('mail_flat')}
                value={formik.values.mail_flat}
            />


            {props.registration
                ?
                props.lastStep
                    ?
                    <>
                        <div className={s.agreement}>
                            <input disabled={true}
                                   className={s.hidden} {...formik.getFieldProps('create_application')}/>
                            <Checkbox
                                checked={checked}
                                onChangeChecked={setChecked}/>
                            <div className={s.agreement__text}>
                                Я принимаю условия <a href="/src/pages"> Пользовательского
                                соглашения</a> и даю своё согласие
                                Komplex-Host на обработку моей персональной информации на
                                условиях, определенных
                                <a href="/src/pages"> Политикой конфиденциальности.</a>
                            </div>
                        </div>
                        <div className={s.form__buttons}>
                            <Button light={true} callBack={props.prevPage} type={"button"}
                                    title={'Назад'}/>
                            <Button title={'Завершить регистрацию'} type={'submit'}
                                    disabled={!checked}/>
                        </div>
                    </>
                    :
                    <div className={s.form__buttons}>
                        <Button light={true} callBack={props.prevPage} type={"button"}
                                title={'Назад'}/>
                        <Button title={'Далее'} type={'submit'}/>
                    </div>
                :
                <div style={{marginTop: '32px'}}>
                    <Button title={'Отправить запрос на изменение'} type={'submit'}/>
                </div>


            }
        </form>
    );
};

export default MailAddressForm;
