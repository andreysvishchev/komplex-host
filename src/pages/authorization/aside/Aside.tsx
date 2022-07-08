import React from 'react';
import logo from '../../../img/logo.svg'
import style from './Aside.module.scss'

const Aside = () => {


    return (
        <aside className={style.wrap}>
            <a href="/Users/svishchev/Desktop/project/komplex-host/public" className={style.logo}>
                <img src={logo} alt="Логотип"/>
            </a>
            <h3 className={style.title}>возможности личного кабинета</h3>
            <ul className={style.list}>
                <li className={style.item}>
                    <div className={`${style.icon} ${style.one}`}></div>
                    <div className={style.info}>
                        <h4 className={style.caption}>Lorem ipsum dolor </h4>
                        <p className={style.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            labore et dolore eiusmod tem eiusmod
                        </p>
                    </div>
                </li>
                <li className={style.item}>
                    <div className={`${style.icon} ${style.two}`}></div>
                    <div className={style.info}>
                        <h4 className={style.caption}>Lorem ipsum dolor </h4>
                        <p className={style.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            labore et dolore eiusmod tem eiusmod
                        </p>
                    </div>
                </li><li className={style.item}>
                <div className={`${style.icon} ${style.three}`}></div>
                <div className={style.info}>
                    <h4 className={style.caption}>Lorem ipsum dolor </h4>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut
                        labore et dolore eiusmod tem eiusmod
                    </p>
                </div>
            </li><li className={style.item}>
                <div className={`${style.icon} ${style.for}`}></div>
                <div className={style.info}>
                    <h4 className={style.caption}>Lorem ipsum dolor </h4>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut
                        labore et dolore eiusmod tem eiusmod
                    </p>
                </div>
            </li>
            </ul>
        </aside>
);
};

export default Aside;