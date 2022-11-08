import React, {useEffect} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import s from './Services.module.scss'
import AllServices from "./all-services/AllServices";
import PlaceRental from "./place-rental/PlaceRental";
import ServerRental from "./server-rental/ServerRental";
import ServiceArchive from "./service-archive/ServiceArchive";
import RackRental from "./rack-rental/RackRental";
import NoticeModal from "../../../components/modals/NoticeModal";
import {fetchEquips} from "../../../store/equipReducer";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../store/store";

const Services = () => {
    const dispatch = useDispatch<AppDispatchType>()





    return (
        <>
            <Tabs selectedTabClassName={s.active}>
                <TabList className={s.list}>
                    <Tab className={s.button}>Все услуги</Tab>
                    <Tab className={s.button}>Аренда места</Tab>
                    <Tab className={s.button}>Аренда стойки </Tab>
                    <Tab className={s.button}>Аренда сервера</Tab>
                    <Tab className={s.button}>Архив услуг</Tab>
                </TabList>

                <TabPanel>
                    <AllServices/>
                </TabPanel>
                <TabPanel>
                    <PlaceRental/>
                </TabPanel>
                <TabPanel>
                    <RackRental/>
                </TabPanel>
                <TabPanel>
                    <ServerRental/>
                </TabPanel>
                <TabPanel>
                    <ServiceArchive/>
                </TabPanel>
            </Tabs>

            <NoticeModal/>

        </>


    );
};

export default Services;