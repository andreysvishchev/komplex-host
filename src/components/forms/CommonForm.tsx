import React from 'react';
import s from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../button/Button";

const CommonForm = () => {

    const style = {
        marginBottom: '0'
    }

    return (
        <form className={s.form}>
            <Input caption={'ИНН'} type={'number'}/>
            <Input caption={'КПП'} type={'number'}/>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <form>
                    <Input caption={'Электронная почта'} type={'email'} style={style}/>
                    <Button type={'submit'} title={'Изменить'} light={true}/>
                </form>

            </div>
            <div className={s.form__row} style={{alignItems: "end", marginBottom: '16px'}}>
                <form>
                    <Input caption={'Пароль'} type={'password'} style={style}/>
                    <Button type={'submit'} title={'Изменить'} light={true}/>
                </form>
            </div>
        </form>
    );
};

export default CommonForm;