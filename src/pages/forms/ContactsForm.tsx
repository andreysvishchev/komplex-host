import React, {useState} from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import Checkbox from "./components/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modal-reducer";
import {button} from "../../style/style";
import Button from "../personal-account/components/button/Button";
import {useFormik} from "formik";

type PropsType = {
    registration?: boolean
    nextPage?: () => void
    prevPage?: () => void
}

type FormikErrorType = {
    firstNameTech?: string
    lastNameTech?: string
    parentTech?: string
    emailTech?: string
    phoneTech?: string
    firstNameFinance?: string
    lastNameFinance?: string
    parentFinance?: string
    emailFinance?: string
    phoneFinance?: string
}

const ContactsForm = (props: PropsType) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            firstNameTech: '',
            lastNameTech: '',
            parentTech: '',
            emailTech: '',
            phoneTech: '',
            firstNameFinance: '',
            lastNameFinance: '',
            parentFinance: '',
            emailFinance: '',
            phoneFinance: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.firstNameTech) {
                errors.firstNameTech = 'Поле обязательно для заполнения';
            }
            if (!values.lastNameTech) {
                errors.lastNameTech = 'Поле обязательно для заполнения';
            }
            if (!values.parentTech) {
                errors.parentTech = 'Поле обязательно для заполнения';
            }
            if (!values.emailTech) {
                errors.emailTech = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailTech)) {
                errors.emailTech = 'Email указан некорректно';
            }
            if (!values.phoneTech) {
                errors.phoneTech = 'Поле обязательно для заполнения';
            }
            if (!values.firstNameFinance) {
                errors.firstNameFinance = 'Поле обязательно для заполнения';
            }
            if (!values.lastNameFinance) {
                errors.lastNameFinance = 'Поле обязательно для заполнения';
            }
            if (!values.parentFinance) {
                errors.parentFinance= 'Поле обязательно для заполнения';
            }
            if (!values.emailFinance) {
                errors.emailFinance = 'Поле обязательно для заполнения';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailFinance)) {
                errors.emailFinance = 'Email указан некорректно';
            }
            if (!values.phoneFinance) {
                errors.phoneFinance = 'Поле обязательно для заполнения';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(openModalAC(true, true, 'Запрос на создание контрагента отправлен в техподдержку'))
            console.log(values)
            formik.resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}  className={s.form}>
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
                    {...formik.getFieldProps('firstNameTech')}
                    error={formik.errors.firstNameTech && formik.touched.firstNameTech}
                    errorText={formik.errors.firstNameTech}
                />
                <FormInput
                    caption={'Имя'}
                    placeholder={'Введите имя'}
                    {...formik.getFieldProps('lastNameTech')}
                    error={formik.errors.lastNameTech && formik.touched.lastNameTech}
                    errorText={formik.errors.lastNameTech}
                />
                <FormInput
                    caption={'Отчество'}
                    placeholder={'Введите отчество'}
                    {...formik.getFieldProps('parentTech')}
                    error={formik.errors.parentTech && formik.touched.parentTech}
                    errorText={formik.errors.parentTech}
                />
                <FormInput
                    caption={'Электронная почта'}
                    type={'tel'}
                    placeholder={'Введите email'}
                    {...formik.getFieldProps('emailTech')}
                    error={formik.errors.emailTech && formik.touched.emailTech}
                    errorText={formik.errors.emailTech}
                />
                <FormInput
                    caption={'Номер телефона'}
                    type={'tel'}
                    placeholder={'Введите телефон'}
                    {...formik.getFieldProps('phoneTech')}
                    error={formik.errors.phoneTech && formik.touched.phoneTech}
                    errorText={formik.errors.phoneTech}
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
                    {...formik.getFieldProps('firstNameFinance')}
                    error={formik.errors.firstNameFinance && formik.touched.firstNameFinance}
                    errorText={formik.errors.firstNameFinance}
                />
                <FormInput
                    caption={'Имя'}
                    placeholder={'Введите имя'}
                    {...formik.getFieldProps('lastNameFinance')}
                    error={formik.errors.lastNameFinance && formik.touched.lastNameFinance}
                    errorText={formik.errors.lastNameFinance}
                />
                <FormInput
                    caption={'Отчество'}
                    placeholder={'Введите отчество'}
                    {...formik.getFieldProps('parentFinance')}
                    error={formik.errors.parentFinance && formik.touched.parentFinance}
                    errorText={formik.errors.parentFinance}
                />
                <FormInput
                    caption={'Электронная почта'}
                    type={'tel'}
                    placeholder={'Введите email'}
                    {...formik.getFieldProps('emailFinance')}
                    error={formik.errors.emailFinance && formik.touched.emailFinance}
                    errorText={formik.errors.emailFinance}
                />
                <FormInput
                    caption={'Номер телефона'}
                    type={'tel'}
                    placeholder={'Введите телефон'}
                    {...formik.getFieldProps('phoneFinance')}
                    error={formik.errors.phoneFinance && formik.touched.phoneFinance}
                    errorText={formik.errors.phoneFinance}
                />
                {
                    props.registration
                        ?
                        <>
                            <div style={{marginTop: '28px'}} className={s.agreement}>
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