import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";

type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: () => void
}

const CompanyInfoForm = (props: PropsType) => {
    return (
        <form className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <FormInput caption={'ИНН'} placeholder={'Номер ИНН'} type={'number'}/>
            <button type={'button'} className={s.fill}>Заполнить по ИНН</button>
            <FormInput caption={'Наименование организаци'} placeholder={'Введите название'}/>
            <FormInput caption={'КПП'} placeholder={' Номер КПП'}/>
            <div className={s.form__buttons}>
                <button onClick={props.leaveReg} className={`${s.button} ${s.light}`}>Назад</button>
                <button onClick={props.nextPage} className={s.button}>Далее</button>
            </div>
        </form>
    );
};

export default CompanyInfoForm;