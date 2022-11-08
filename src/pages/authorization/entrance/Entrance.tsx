import React, {useEffect} from 'react';
import LogIn from "./login/LogIn";
import Registration from "./registration/Registration";
import s from './../Auth.module.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../store/store";
import {loginError} from "../../../store/errorReducer";
import ConfirmPasswordModal from "../../../components/modals/ConfirmPasswordModal";
import {openConfirmRecoveryModal} from "../../../store/modalReducer";


const Entrance = () => {
    const errorStatus = useAppSelector<boolean>(state => state.error.loginError)
    const errorMessage = useAppSelector<string>(state => state.error.messageError)
    const dispatch = useDispatch<AppDispatchType>()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('type') === 'recovery') {
            dispatch(openConfirmRecoveryModal(true))
        }
    })

    const closeError = () => {
        dispatch(loginError(false))
    }


    return (
        <div className={s.entrance}>
            <Tabs selectedTabClassName={s.active} className={s.tabs}>
                <div className={s.decor}>
                    <TabList className={s.tabs__buttons}>
                        <Tab onClick={closeError} className={s.tabs__button}>Вход</Tab>
                        <Tab onClick={closeError} className={s.tabs__button}>Регистрация</Tab>
                    </TabList>
                </div>
                <div className={s.tabs__list}>
                    {
                        errorStatus &&
                        <div className={s.error}>{errorMessage}</div>
                    }
                    <TabPanel>
                        <LogIn/>
                    </TabPanel>
                    <TabPanel>
                        <Registration/>
                    </TabPanel>
                </div>
            </Tabs>
            <ConfirmPasswordModal guid={searchParams.get('guid')}/>

        </div>
    );
};

export default Entrance;