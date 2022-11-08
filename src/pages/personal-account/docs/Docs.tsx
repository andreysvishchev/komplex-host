import React from 'react';
import s from "../PersonalAccount.module.scss";
import Tooltip from "../../../components/tooltip/Tooltip";


const Docs = () => {
    const state = [
        {
            "title": "ДОГОВОР НА ОКАЗАНИЕ УСЛУГИ«АРЕНДА МЕСТА/ШКАФА»"
        },
        {
            "title": "ДОГОВОРНА ОКАЗАНИЕ УСЛУГИ «АРЕНДА СЕРВЕРА»"
        },
        {
            "title": "ПРАВИЛА ПОЛЬЗОВАНИЯУСЛУГОЙДОСТУПА К СЕТИ ИНТЕРНЕТ"
        },
        {
            "title": "АКТ ПРИЕМА И ПЕРЕДАЧИ ОБОРУДОВАНИЯ"
        },
        {
            "title": "СОГЛАШЕНИЕ ОБ УРОВНЕ СЕРВИСА УСЛУГИ «АРЕНДА МЕСТА/ШКАФА»"
        },
        {
            "title": "СОГЛАШЕНИЕ ОБ УРОВНЕ СЕРВИСА УСЛУГИ «АРЕНДА СЕРВЕРА»"
        },
        {
            "title": "СОГЛАШЕНИЕ ОБ УРОВНЕ СЕРВИСА УСЛУГИ «ИНТЕРНЕТ»"
        },
        {
            "title": "ЛИЦЕНЗИЯ НА ОКАЗАНИЕ ТЕЛЕМАТИЧЕСКИХ УСЛУГ СВЯЗИ"
        },
        {
            "title": "СВИДЕТЕЛЬСТВО НА ТОВАРНЫЙ ЗНАК"
        },
        {
            "title": "ПОЛОЖЕНИЕ О ЗАЩИТЕ И ОБРАБОТКЕ ПЕРСОНАЛЬНЫХ ДАННЫХ"
        },
    ]

    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <div className={s.caption}>Документы</div>
                    <Tooltip/>
                </div>
                <a className={s.button} href="/src/pages" download>Скачать всё</a>
            </div>
            <div className={s.docs}>
                {state.map((el, i) => {
                    return (
                        <div key={i} className={s.docs__item}>
                            <div className={s.docs__icon}/>
                            <div className={s.docs__title}>{el.title}</div>
                            <a href="/src/pages" download className={s.docs__link}/>
                        </div>
                    )
                })}


            </div>


        </div>
    );
};

export default Docs;