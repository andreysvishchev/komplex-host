import React, {useState} from 'react';
import s from "./Form.module.scss";
import FormInput from "./components/FormInput/FormInput";
import Checkbox from "./components/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {openModalAC} from "../../reducers/modal-reducer";
import {button} from "../../style/style";

type PropsType = {
    registration?: boolean
    nextPage?: () => void
    prevPage?: () => void
}
const ContactsForm = (props: PropsType) => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState<boolean>(false);

    const registrationComplete = () => {
        dispatch(openModalAC(true, true, 'Запрос на создание контрагента отправлен в техподдержку'))
    }

    return (
        <form className={s.form}>
            {
                props.registration
                    ?
                    <div className={s.form__headline}>Введите контактное лицо <span>по техническим вопросам</span>
                    </div>
                    :
                    <div className={s.form__title}>Контактное лицо по техническим вопросам</div>
            }
            <div className={props.registration ? ` ${s.registration} ${s.form}` : ''}>
                <FormInput caption={'Фамилия'} placeholder={'Введите фамилию'}/>
                <FormInput caption={'Имя'} placeholder={'Введите имя'}/>
                <FormInput caption={'Отчество'} placeholder={'Введите отчество'}/>
                <FormInput caption={'Электронная почта'} type={'email'} placeholder={'Введите e-mail'}/>
                <FormInput caption={'Номер телефона'} type={'tel'} placeholder={'Введите телефон'}/>
            </div>
            {
                props.registration
                    ?
                    <div style={{marginTop: '32px'}} className={s.form__headline}>Введите контактное лицо <span>по финансовым вопросам</span>
                    </div>
                    :
                    <div style={{marginTop: '32px'}} className={s.form__title}>Контактное лицо по финансовым
                        вопросам</div>
            }
            <div className={props.registration ? ` ${s.registration} ${s.form}` : ''}>
                <FormInput caption={'Фамилия'} placeholder={'Введите фамилию'}/>
                <FormInput caption={'Имя'} placeholder={'Введите имя'}/>
                <FormInput caption={'Отчество'} placeholder={'Введите отчество'}/>
                <FormInput caption={'Электронная почта'} type={'email'} placeholder={'Введите e-mail'}/>
                <FormInput caption={'Номер телефона'} type={'tel'} placeholder={'Введите телефон'}/>
                {
                    props.registration
                        ?
                        <>
                            <div style={{marginTop: '28px'}} className={s.agreement}>
                                <Checkbox checked={checked} onChangeChecked={setChecked}/>
                                <div className={s.agreement__text}>
                                    Я принимаю условия <a href="/"> Пользовательского соглашения</a> и даю своё согласие
                                    Komplex-Host на обработку моей персональной информации на условиях, определенных
                                    <a href="/"> Политикой конфиденциальности.</a>
                                </div>
                            </div>
                            <div className={s.form__buttons}>
                                <button onClick={props.prevPage} type={'button'}
                                        className={`${s.button} ${s.light}`}>Назад
                                </button>
                                <button disabled={!checked} type={'button'} onClick={registrationComplete}
                                        className={!checked ? `${s.disabled} ${s.button}` : s.button}>Завершить
                                    регистрацию
                                </button>
                            </div>
                        </>
                        :
                        <button style={{marginTop: '16px'}} className={s.button}>Сохранить</button>
                }
            </div>
        </form>
    );
};

export default ContactsForm;