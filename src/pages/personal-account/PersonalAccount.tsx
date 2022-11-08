import React, {useEffect} from 'react';
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import s from './PersonalAccount.module.scss'
import {Outlet, useNavigate} from "react-router-dom";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import ConfirmModal from "../../components/modals/ConfirmModal";



const PersonalAccount = () => {

    const status = useAppSelector<string>(state => state.auth.status)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatchType>()

    useEffect(()=> {
        if(status === '1') {
            navigate('/')
        }
    })

    return (
        <div className={s.main}>
            <Header/>
            <div className={s.inner}>
                <Nav/>
                <div className={s.content}>
                    <Outlet/>
                </div>
            </div>
            <ConfirmModal/>
        </div>
    );
};

export default PersonalAccount;