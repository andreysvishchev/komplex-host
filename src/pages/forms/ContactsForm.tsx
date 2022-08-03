import React, {useState} from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import Checkbox from "./components/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modalReducer";
import {button} from "../../style/style";
import Button from "../personal-account/components/button/Button";
import {useFormik} from "formik";
import {addPrivateData, RegistrationDataType} from "../../reducers/registrationReducer";
import {useAppSelector} from "../../store/store";

type PropsType = {
    registration?: boolean
    nextPage?: () => void
    prevPage?: () => void
}

type FormikErrorType = {
    tech_last_name?: string
    tech_first_name?: string
    tech_parent?: string
    tech_email?: string
    tech_phone?: string
    finance_last_name?: string
    finance_first_name?: string
    finance_parent?: string
    finance_email?: string
    finance_phone?: string
}

const ContactsForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const data = useAppSelector<RegistrationDataType>(state => state.registration.registrationData)
    const [checked, setChecked] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            tech_first_name: data.tech_first_name,
            tech_last_name: data.tech_last_name,
            tech_parent: data.tech_parent,
            tech_email: data.tech_email,
            tech_phone: data.tech_phone,
            finance_first_name: data.finance_first_name,
            finance_last_name: data.finance_last_name,
            finance_parent: data.finance_parent,
            finance_email: data.finance_email,
            finance_phone: data.finance_phone,
            create_application: true
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.tech_first_name) {
                errors.tech_first_name = 'Поле обязательно для заполнения';
            }
            if (!values.tech_last_name) {
                errors.tech_last_name = 'Поле обязательно для заполнения';
            }
            if (!values.tech_parent) {
                errors.tech_parent = 'Поле обязательно для заполнения';
            }
            if (!values.tech_email) {
                errors.tech_email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.tech_email)) {
                errors.tech_email = 'Email указан некорректно';
            }
            if (!values.tech_phone) {
                errors.tech_phone = 'Поле обязательно для заполнения';
            }
            if (!values.finance_first_name) {
                errors.finance_first_name = 'Поле обязательно для заполнения';
            }
            if (!values.finance_last_name) {
                errors.finance_last_name = 'Поле обязательно для заполнения';
            }
            if (!values.finance_parent) {
                errors.finance_parent = 'Поле обязательно для заполнения';
            }
            if (!values.finance_email) {
                errors.finance_email = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.finance_email)) {
                errors.finance_email = 'Email указан некорректно';
            }
            if (!values.finance_phone) {
                errors.finance_phone = 'Поле обязательно для заполнения';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(addPrivateData(Object.assign(data, values)))
            console.log(data)
            // const valueStr = window.btoa(unescape(encodeURIComponent(JSON.stringify(data))))
            //console.log(decodeURIComponent(escape(window.atob(valueStr))))
            dispatch(openModalAC(true, true, 'Запрос на создание контрагента отправлен в техподдержку'))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            {
                props.registration
                    ?
                    <div className={s.form__headline}>Введите контактное лицо <span>по техническим вопросам</span>
                    </div>
                    :
                    <div className={s.form__title}>Контактное лицо по техническим вопросам</div>
            }
            <div className={props.registration ? ` ${s.registration} ${s.form}` : ''}>
                <FormInput
                    caption={'Фамилия'}
                    placeholder={'Введите фамилию'}
                    {...formik.getFieldProps('tech_last_name')}
                    error={formik.errors.tech_last_name && formik.touched.tech_last_name}
                    errorText={formik.errors.tech_last_name}
                />
                <FormInput
                    caption={'Имя'}
                    placeholder={'Введите имя'}
                    {...formik.getFieldProps('tech_first_name')}
                    error={formik.errors.tech_first_name && formik.touched.tech_first_name}
                    errorText={formik.errors.tech_first_name}
                />
                <FormInput
                    caption={'Отчество'}
                    placeholder={'Введите отчество'}
                    {...formik.getFieldProps('tech_parent')}
                    error={formik.errors.tech_parent && formik.touched.tech_parent}
                    errorText={formik.errors.tech_parent}
                />
                <FormInput
                    caption={'Электронная почта'}
                    placeholder={'Введите email'}
                    {...formik.getFieldProps('tech_email')}
                    error={formik.errors.tech_email && formik.touched.tech_email}
                    errorText={formik.errors.tech_email}
                />
                <FormInput
                    caption={'Номер телефона'}
                    placeholder={'Введите телефон'}
                    {...formik.getFieldProps('tech_phone')}
                    error={formik.errors.tech_phone && formik.touched.tech_phone}
                    errorText={formik.errors.tech_phone}
                />
            </div>
            {
                props.registration
                    ?
                    <div style={{marginTop: '32px'}} className={s.form__headline}>Введите контактное лицо <span>по финансовым вопросам</span>
                    </div>
                    :
                    <div style={{marginTop: '32px'}} className={s.form__title}>Контактное лицо по финансовым
                        вопросам</div>
            }
            <div className={props.registration ? ` ${s.registration} ${s.form}` : ''}>
                <FormInput
                    caption={'Фамилия'}
                    placeholder={'Введите фамилию'}
                    {...formik.getFieldProps('finance_last_name')}
                    error={formik.errors.finance_last_name && formik.touched.finance_last_name}
                    errorText={formik.errors.finance_last_name}
                />
                <FormInput
                    caption={'Имя'}
                    placeholder={'Введите имя'}
                    {...formik.getFieldProps('finance_first_name')}
                    error={formik.errors.finance_first_name && formik.touched.finance_first_name}
                    errorText={formik.errors.finance_first_name}
                />
                <FormInput
                    caption={'Отчество'}
                    placeholder={'Введите отчество'}
                    {...formik.getFieldProps('finance_parent')}
                    error={formik.errors.finance_parent && formik.touched.finance_parent}
                    errorText={formik.errors.finance_parent}
                />
                <FormInput
                    caption={'Электронная почта'}
                    type={'tel'}
                    placeholder={'Введите email'}
                    {...formik.getFieldProps('finance_email')}
                    error={formik.errors.finance_email && formik.touched.finance_email}
                    errorText={formik.errors.finance_email}
                />
                <FormInput
                    caption={'Номер телефона'}
                    type={'tel'}
                    placeholder={'Введите телефон'}
                    {...formik.getFieldProps('finance_phone')}
                    error={formik.errors.finance_phone && formik.touched.finance_phone}
                    errorText={formik.errors.finance_phone}
                />
                {
                    props.registration
                        ?
                        <>
                            <div style={{marginTop: '28px'}} className={s.agreement}>
                                <input disabled={true}
                                       className={s.hidden} {...formik.getFieldProps('create_application')}/>
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
                        <div style={{marginTop: '12px'}}>
                            <Button title={'Сохранить'} type={'submit'}/>
                        </div>
                }
            </div>
        </form>
    );
};

export default ContactsForm;