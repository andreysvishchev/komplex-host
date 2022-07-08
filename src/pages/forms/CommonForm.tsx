import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";

const CommonForm = () => {

    const style = {
        marginBottom: '0'
    }

    return (
        <form className={s.form}>
            <FormInput caption={'ИНН'} type={'number'}/>
            <FormInput caption={'КПП'} type={'number'}/>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <FormInput caption={'Электронная почта'} type={'email'} style={style}/>
                <button className={`${s.button} ${s.light}`}>Изменить</button>
            </div>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <FormInput caption={'Пароль'} type={'password'} style={style}/>
                <button className={`${s.button} ${s.light}`}>Изменить</button>
            </div>
        </form>
    );
};

export default CommonForm;