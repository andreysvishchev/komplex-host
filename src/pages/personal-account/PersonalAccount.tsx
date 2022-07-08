import React, {useEffect} from 'react';
import Nav from "./nav/Nav";
import Header from "./header/Header";
import s from './PersonalAccount.module.scss'
import {Outlet, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../store/store";



const PersonalAccount = () => {

    const auth = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if(auth) {
    //         debugger
    //         console.log('ok')
    //     } else (
    //         navigate('/auth')
    //     )
    // }, [])


    return (
        <div className={s.main}>
            <Header/>
            <div className={s.inner}>
                <Nav/>
                <div className={s.content}>
                    <Outlet/>
                    {/*<Routes>*/}
                    {/*    <Route path="services" element={<Services/>}/>*/}
                    {/*    <Route path="union" element={<Union/>}/>*/}
                    {/*    <Route path="notifications" element={<Notice/>}/>*/}
                    {/*    <Route path="support" element={<Support/>}/>*/}
                    {/*    <Route path="docs" element={<Docs/>}/>*/}
                    {/*    <Route path="profile" element={<Profile/>}/>*/}
                    {/*    <Route path="faq" element={<Faq/>}/>*/}
                    {/*</Routes>*/}

                </div>
            </div>
        </div>
    );
};

export default PersonalAccount;