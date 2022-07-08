import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";


type PropsType = {
    nextPage: () => void
    registration: boolean
    leaveReg: ()=> void
}

const PersonalInfoForm = (props: PropsType) => {

    return (
        <form className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <FormInput caption={'Фамилия'} placeholder={'Введите фамилию'}/>
            <FormInput caption={'Имя'} placeholder={'Введите имя'}/>
            <FormInput caption={'Отчество'} placeholder={'Введите отчество'}/>
            <FormInput caption={'Дата рождения'} placeholder={'ДД.ММ.ГГГГ'} type='number'/>
            <FormInput caption={'Номер телефона'} placeholder={'Введите телефон'} type='tel'/>
            <div className={s.form__buttons}>
                <button onClick={props.leaveReg} className={`${s.button} ${s.light}`}>Назад</button>
                <button onClick={props.nextPage} className={s.button}>Далее</button>
            </div>
        </form>
    );
};

export default PersonalInfoForm;