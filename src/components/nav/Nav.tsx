import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {

    const setActive = ({isActive}: { isActive: boolean }): string => {
        return `${s.link} ${isActive ? s.active : ''}`;
    }

    return (
        <nav className={s.wrap}>

            <div className={s.user}>
                <span className={s.user__name}>N3245wexc</span>
                <span className={s.user__address}>Филиал ФГУП НПО Микр</span>
            </div>

            <h3 className={s.title}>Личный кабинет</h3>

            <ul className={s.list}>
                <li className={`${s.item} ${s.services}`}>
                    <NavLink to="services"  className={setActive}>Услуги</NavLink>
                </li>
                <li className={`${s.item} ${s.union}`}>
                    <NavLink to="union" className={setActive}>Платежи</NavLink>
                </li>
                <li className={`${s.item} ${s.notification}`}>
                    <NavLink to="notifications" className={setActive}>Уведомления</NavLink>
                </li>
                <li className={`${s.item} ${s.supp}`}>
                    <NavLink to="support" className={setActive}>Техподдержка</NavLink>
                </li>
                <li className={`${s.item} ${s.docs}`}>
                    <NavLink to="docs" className={setActive}>Документы</NavLink>
                </li>
                <li className={`${s.item} ${s.profile}`}>
                    <NavLink to="profile" className={setActive}>Профиль</NavLink>
                </li>
                <li className={`${s.item} ${s.faq}`}>
                    <NavLink to="faq" className={setActive}>FAQ</NavLink>
                </li>
            </ul>
            <div className={s.support}>
                <h5 className={s.support__title}>Техподдержка</h5>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Skype</h6>
                    <a href="src/components/nav/Nav#" className={s.support__link}>Komplex-Host</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Телефон</h6>
                    <a href="tel: +78312239966" className={s.support__link}>+7 (831) 223-99-66</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>WhatsApp/Viber</h6>
                    <a href="src/components/nav/Nav#" className={s.support__link}>+7 (905) 194-27-76</a>
                </div>
                <div className={s.support__item}>
                    <h6 className={s.support__caption}>Почта</h6>
                    <a href="mailto:support@komplex-host.ru" className={s.support__link}>support@komplex-host.ru</a>
                </div>
            </div>
            <div className={s.copyright}>
                <span> 2006 - 2022 «Комплекс-Хост».</span>
                <span> Все права защищены.</span>
                <a href="src/components/nav/Nav#"> Политика конфиденциальности</a>
                <a href="src/components/nav/Nav#"> Политика в отношении обработки персональных данных</a>
            </div>
        </nav>

    );
};

export default Nav;