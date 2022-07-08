import React from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import {button} from "../../style/style";


type PropsType = {
    prevPage: ()=> void
    nextPage: () => void
   registration: boolean
}

const PassportDataForm = (props: PropsType) => {
    return (
        <form className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <div className={s.form__row}>
                <FormInput caption={'Серия'} placeholder={'_ _ _ _'}/>
                <FormInput caption={'Номер'} placeholder={'_ _ _ _ _ _'}/>
            </div>
            <div className={s.textarea}>
                <div className={s.textarea__caption}>Кем выдан</div>
                <textarea className={s.textarea__field} placeholder={'Введите кем выдан паспорт'}></textarea>
            </div>
            <FormInput caption={'Дата выдачи'} placeholder={'ДД.ММ.ГГГГ'} type='number'/>
            <FormInput caption={'ИНН'} type={'number'}/>
            <div className={s.form__caption}>Скан паспорта</div>
            <div className={s.form__scan}>
                <div className={`${s.file} ${s.one}`}>
                    <div className={s.file__title}> Скан разворота</div>
                    <input className={s.file__input} type="file"/>
                    <label  className={s.file__label}>Добавить</label>
                    <button className={s.file__clear}>x</button>
                </div>

            </div>
            <div className={s.form__scan}>
                <div className={`${s.file} ${s.two}`}>
                    <div className={s.file__title}>Скан прописки</div>
                    <input className={s.file__input} type="file"/>
                    <label  className={s.file__label}>Добавить</label>
                    <button type={"button"} className={s.file__clear}>x</button>
                </div>
            </div>
            <div className={s.form__buttons}>
                <button onClick={props.prevPage} className={`${s.button} ${s.light}`}>Назад</button>
                <button onClick={props.nextPage} className={s.button}>Далее</button>
            </div>

        </form>
    );
};

export default PassportDataForm;