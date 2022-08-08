import React, {useState} from 'react';
import s from '../../../Auth.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../../store/store";
import {choicePartner, PartnersType, registrationPage} from "../../../../../reducers/registrationReducer";
import CompanyRegistration from "./CompanyRegistration";
import PrivateRegistration from "./PrivateRegistration";
import EntrepreneurRegistration from "./EntrepreneurRegistration";


const PartnerRegistration = () => {
    const [hide, setHide] = useState<boolean>(false)
    const dispatch = useDispatch()
    let partners = useSelector<AppStateType, PartnersType>(state => state.registration.partners)

    const openPrivateReg = () => {
        setHide(true)
        dispatch(choicePartner('private'))
    }
    const openCompanyReg = () => {
        setHide(true)
        dispatch(choicePartner('company'))
    }
    const entrepreneurReg = () => {
        setHide(true)
        dispatch(choicePartner('entrepreneur'))
    }
    const leaveReg = () => {
        dispatch(registrationPage(false))
        setHide(false)
    }


    return (
        <div className={s.registration}>
            <button onClick={leaveReg} className={s.registration__close}>Выйти</button>
            <div className={s.registration__title}>Регистрация контрагента</div>
            <div className={hide ? `${s.registration__choice} ${s.hide}` : s.registration__choice}>
                <button onClick={openPrivateReg}
                        className={s.registration__partner}>Физическое лицо
                </button>
                <button onClick={entrepreneurReg}
                        className={s.registration__partner}>Индивидуальный
                    предприниматель
                </button>
                <button onClick={openCompanyReg}
                        className={s.registration__partner}>Юридическое лицо
                </button>
            </div>

            {partners === 'private' && <PrivateRegistration setHide={setHide} leaveReg={leaveReg}/>}
            {partners === 'entrepreneur' && <EntrepreneurRegistration setHide={setHide} leaveReg={leaveReg}/>}
            {partners === 'company' && <CompanyRegistration setHide={setHide} leaveReg={leaveReg}/>}


        </div>

    );
};

export default PartnerRegistration;