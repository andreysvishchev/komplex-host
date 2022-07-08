import React from 'react';
import s from "../../../forms/Form.module.scss";
import FormInput from "../../../forms/components/FormInput/FormInput";
import {useDispatch} from "react-redux";
import { registrationPage } from '../../../../reducers/registrationReducer';

const Registration = () => {
    const dispatch = useDispatch()

    const openRegistrationPage = () => {
        dispatch(registrationPage(true))
    }

    const style = {
        marginBottom: 0
    }
    return (
        <>
            <form className={s.form}>
                <FormInput caption={'Электронная почта'} placeholder={'Введите e-mail'} type={'email'}/>
                <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true}
                           style={style}/>
                <p className={s.recommendation}>Минимальный размер пароля 8 символов, минимум один спец. символ (!@#$%^)
                    и одна цифра</p>
                <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true}/>
                <div className={s.form__row} style={{marginTop: '24px', justifyContent: "flex-end"}}>
                    <button onClick={openRegistrationPage} className={s.button}>Далее</button>
                </div>
            </form>
        </>

    );
};

export default Registration;