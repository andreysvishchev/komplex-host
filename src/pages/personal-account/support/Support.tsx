import React, {useEffect, useState} from 'react';
import Applications from "./applications/applications";
import Chat from "./chat/Chat";
import s from './Support.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../store/store";
import {ApplicationType} from "../../../reducers/supportReducer";


const Support = () => {

    const applications = useSelector<AppStateType, ApplicationType[]>(state => state.support)
    const [id, setId] = useState<string>(applications[0].id)


    return (
        <div className={s.wrap}>
            <Applications applications={applications} setId={setId}/>
            <Chat applications={applications} id={id}/>
        </div>
    );
};

export default Support;