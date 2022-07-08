import s from './Form.module.scss'
import FormInput from "./components/FormInput/FormInput";
import {button, theme} from "../../style/style";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modal-reducer";
import Checkbox from "./components/Checkbox/Checkbox";

type PropsType = {
    prevPage?: () => void
    nextPage?:()=> void
    registration?: boolean
    lastStep?: boolean
}

const AddressForm = (props: PropsType) => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState<boolean>(false);

    const registrationComplete = () => {
        dispatch(openModalAC(true, true, 'Запрос на создание контрагента отправлен в техподдержку'))
    }

    return (
        <form className={props.registration ? `${s.registration} ${s.form}` : s.form}>
            <div className={s.form__row}>
                <FormInput caption={'Индекс'} type={'number'} placeholder={'_ _ _ _ _ _'}/>
                <FormInput caption={'Страна'} placeholder={'Введите страну'}/>
            </div>
            <FormInput caption={'Область'} placeholder={'Введите область'}/>
            <FormInput caption={'Район/Округ'} placeholder={'Введите район или округ'}/>
            <FormInput caption={'Населенный пункт'} placeholder={'Введите населенный пункт'}/>
            <FormInput caption={'Улица'} placeholder={'Введите улицу'}/>
            <div className={s.form__row}>
                <FormInput  caption={'Дом'} placeholder={'Номер дома'}/>
                <FormInput caption={props.lastStep ? 'Квартира' : 'Квартира/офис'}
                           placeholder={props.lastStep ? 'Номер квартиры' : 'Номер квартиры/офиса'}/>
            </div>

            {props.registration
                ?
                props.lastStep
                    ?
                    <>
                        <div className={s.agreement}>
                            <Checkbox checked={checked} onChangeChecked={setChecked}/>
                            <div className={s.agreement__text}>
                                Я принимаю условия <a href="/"> Пользовательского соглашения</a> и даю своё согласие
                                Komplex-Host на обработку моей персональной информации на условиях, определенных
                                <a href="/"> Политикой конфиденциальности.</a>
                            </div>
                        </div>
                        <div className={s.form__buttons}>
                            <button onClick={props.prevPage} type={'button'} className={`${s.button} ${s.light}`}>Назад
                            </button>
                            <button disabled={!checked} type={'button'} onClick={registrationComplete}
                                    className={!checked ? `${s.disabled} ${s.button}` : s.button}>Завершить
                                регистрацию
                            </button>
                        </div>
                    </>
                    :
                    <div style={{marginTop: '12px'}} className={s.form__buttons}>
                        <button onClick={props.prevPage} type={'button'} className={`${s.button} ${s.light}`}>Назад</button>
                        <button type={'button'} onClick={props.nextPage} className={s.button}>Далее</button>
                    </div>
                :
                <button style={{marginTop: '12px'}} className={s.button}>Отправить запрос на изменение</button>

            }
        </form>
    );
};

export default AddressForm;
