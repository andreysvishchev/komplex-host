import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";

type PropsType = {
    registration?: boolean
    prevPage?: () => void
    nextPage?: () => void
}

const RequisitesForm = (props: PropsType) => {
    return (
        <div>
            <form className={props.registration ? `${s.registration} ${s.form}` : s.form}>
                <FormInput caption={'Наименование банка'} placeholder={'Введите название'}/>
                <FormInput caption={'Расчетный счет'} placeholder={'Номер рас/сч'} type={'number'}/>
                <FormInput caption={'Корреспондентский счет'} placeholder={'Номер кор/сч'} type={'number'}/>
                <div className={s.form__row}>
                    <FormInput caption={'Индекс'} type={'number'} placeholder={'_ _ _ _ _ _'}/>
                    <FormInput caption={'Страна'} placeholder={'Введите страну'}/>
                </div>
                <FormInput caption={'Область'} placeholder={'Введите область'}/>
                <FormInput caption={'Район/Округ'} placeholder={'Введите район или округ'}/>
                <FormInput caption={'Населенный пункт'} placeholder={'Введите населенный пункт'}/>
                <FormInput caption={'Улица'} placeholder={'Введите улицу'}/>
                <div className={s.form__row}>
                    <FormInput caption={'Дом'} placeholder={'Номер дома'}/>
                    <FormInput caption={'Корпус'} placeholder={'Номер корпуса'}/>
                </div>
                {
                    props.registration
                        ?
                        <div style={{marginTop: '16px'}}  className={s.form__buttons}>
                            <button onClick={props.prevPage} type={'button'}
                                    className={`${s.button} ${s.light}`}>Назад
                            </button>
                            <button type={'button'} onClick={props.nextPage} className={s.button}>Далее</button>
                        </div>
                        :
                        <button style={{marginTop: '16px'}} className={s.button}>Отправить запрос на изменение</button>
                }

            </form>
        </div>
    );
};

export default RequisitesForm;