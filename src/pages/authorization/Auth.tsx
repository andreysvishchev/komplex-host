import React from 'react';
import Aside from "../../components/aside/Aside";
import Entrance from "./entrance/Entrance";
import s from './Auth.module.scss'
import PartnerRegistration from "./partner-registration/PartnerRegistration";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../store/store";
import NoticeModal from "../../components/modals/NoticeModal";

const Auth = () => {
    const registrationPage = useSelector<AppStateType, boolean>(state => state.registration.registrationPage)
    const dispatch = useDispatch<AppDispatchType>()


    return (
        <div className={s.wrap}>
            <Aside/>

            {
                registrationPage
                    ? <PartnerRegistration/>
                    : <Entrance/>
            }

            <NoticeModal/>

        </div>
    );
};

export default Auth;