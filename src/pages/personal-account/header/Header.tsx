import React from 'react';
import logo from './../../../img/logo-header.svg'
import s from './Header.module.scss'
import {useDispatch} from "react-redux";
import {setAppInitializedAC} from "../../../reducers/authReducer";
import {Navigate, NavLink} from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch()

    const logout = ()=> {
        dispatch(setAppInitializedAC(false))
    }

    return (
        <header className={s.wrap}>
            <div className={s.logo}>
                <img src={logo} alt="логотип"/>
            </div>
            <div className={s.inner}>
                <h2 className={s.page}>Услуги</h2>
                <div className={s.menu}>
                    <a className={s.balance}>245 982 ₽</a>
                    <div className={s.alerts}>
                        <a href="#" className={`${s.mail} ${s.active}`}></a>
                        <a href="#" className={`${s.notifications} ${s.active}`}></a>
                    </div>
                    <button type={'button'} onClick={logout} className={s.logout}>Выйти</button>
                </div>
            </div>
        </header>
    );
};

export default Header;