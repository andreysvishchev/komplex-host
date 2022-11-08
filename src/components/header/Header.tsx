import React from 'react';
import logo from '../../img/logo-header.svg'
import s from './Header.module.scss'
import {useDispatch} from "react-redux";
import {logout} from "../../store/authReducer";
import {AppDispatchType} from "../../store/store";

const Header = () => {
    const dispatch = useDispatch<AppDispatchType>()

    const logoutHandler = ()=> {
        dispatch(logout())
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
                        <a href="src/components/header/Header#" className={`${s.mail} ${s.active}`}></a>
                        <a href="src/components/header/Header#" className={`${s.notifications} ${s.active}`}></a>
                    </div>
                    <button type={'button'} onClick={logoutHandler} className={s.logout}>Выйти</button>
                </div>
            </div>
        </header>
    );
};

export default Header;