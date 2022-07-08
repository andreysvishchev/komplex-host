import React from 'react';
import s from './../../../forms/Form.module.scss'
import FormInput from "../../../forms/components/FormInput/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "../../../../store/store";
import {setAppInitializedAC} from "../../../../reducers/authReducer";
import {Navigate, NavLink} from "react-router-dom";





const LogIn = () => {

    const dispatch = useDispatch()

    const logIn = ()=> {
        dispatch(setAppInitializedAC(true))
    }

    return (
            <form className={s.form}>
               <FormInput caption={'Электронная почта'} placeholder={'Введите e-mail'} type={'email'} />
                <FormInput caption={'Пароль'} placeholder={'Введите пароль'} type={'password'} password={true} />
                <div className={s.form__row} style={{marginTop: '24px'}}>
                    <button type={'button'}  onClick={logIn} className={s.button}>Вход</button>
                    <button className={s.recovery}>Забыли пароль?</button>
                </div>
            </form>
    );
};

export default LogIn;