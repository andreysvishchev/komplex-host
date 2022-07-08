import React from 'react';
import LogIn from "./login/LogIn";
import Registration from "./registration/Registration";
import s from './../Auth.module.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Route, Routes} from "react-router-dom";
import PartnerRegistration from "./registration/partner-registration/PartnerRegistration";


const Entrance = () => {
    return (
        <div className={s.entrance}>
            <Tabs selectedTabClassName={s.active} className={s.tabs}>
                <div className={s.decor}>
                    <TabList className={s.tabs__buttons}>
                        <Tab className={s.tabs__button}>Вход</Tab>
                        <Tab className={s.tabs__button}>Регистрация</Tab>
                    </TabList>
                </div>
                <div className={s.tabs__list}>
                    <TabPanel>
                        <LogIn/>
                    </TabPanel>
                    <TabPanel>
                        <Registration/>
                    </TabPanel>
                </div>
            </Tabs>


        </div>
    );
};

export default Entrance;