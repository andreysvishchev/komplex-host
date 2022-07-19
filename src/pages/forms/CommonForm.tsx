import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";
import Button from "../personal-account/components/button/Button";

const CommonForm = () => {

    const style = {
        marginBottom: '0'
    }

    return (
        <form className={s.form}>
            <FormInput caption={'ИНН'} type={'number'}/>
            <FormInput caption={'КПП'} type={'number'}/>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <form>
                    <FormInput caption={'Электронная почта'} type={'email'} style={style}/>
                    <Button type={'submit'} title={'Изменить'} light={true}/>
                </form>

            </div>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <form>
                    <FormInput caption={'Пароль'} type={'password'} style={style}/>
                    <Button type={'submit'} title={'Изменить'} light={true}/>
                </form>
            </div>
        </form>
    );
};

export default CommonForm;