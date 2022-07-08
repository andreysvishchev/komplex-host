import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import s from "../PersonalAccount.module.scss";
import AddressForm from '../../forms/AddressForm';
import ContactsForm from "../../forms/ContactsForm";
import RequisitesForm from "../../forms/RequisitesForm";
import CommonForm from "../../forms/CommonForm";

export const Profile = () => {

    return (
        <>
            <div className={s.profile}>
                <div className={ `${s.wrap} ${s.profile__top}`}>
                    <div className={s.user}>
                        <div className={s.user__icon}/>
                        <div className={s.user__name}>филиал фгуп нпо микроген минздрава россии в городе нижний новгород</div>
                    </div>
                    <div className={s.contract}>
                        <div className={s.contract__caption}>Номер договора</div>
                        <div className={s.contract__number}>N3245wexc</div>
                    </div>
                </div>
                <Tabs selectedTabClassName={s.active}  className={s.tabs}>
                    <div className={`${s.wrap} ${s.tabs__list}`}>
                        <TabPanel>
                            <div className={s.profile__title}>Общее</div>
                            <CommonForm/>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.profile__title}>Юридический адрес</div>
                            <AddressForm/>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.profile__title}>Почтовый адрес</div>
                            <AddressForm/>
                        </TabPanel>
                        <TabPanel>
                            <div className={s.profile__title}>Банковские реквизиты</div>
                            <RequisitesForm/>
                        </TabPanel>
                        <TabPanel>
                            <ContactsForm/>
                        </TabPanel>
                    </div>
                    <TabList className={`${s.wrap} ${s.tabs__buttons}` }>
                        <Tab className={s.tabs__button}>Общее</Tab>
                        <Tab className={s.tabs__button}>Юридический адрес</Tab>
                        <Tab className={s.tabs__button}>Почтовый адрес</Tab>
                        <Tab className={s.tabs__button}>Банковские реквизиты</Tab>
                        <Tab className={s.tabs__button}>Контактное лицо</Tab>
                    </TabList>
                </Tabs>
            </div>

        </>
    );
};


