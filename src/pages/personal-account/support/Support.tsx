import React, {useEffect, useState} from 'react';
import Applications from "./applications/applications";
import Chat from "./chat/Chat";
import s from './Support.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../store/store";
import {ApplicationType, fetchApplications, MessageType} from "../../../reducers/supportReducer";

const Support = () => {

    return (
        <div className={s.wrap}>
            <Applications />
            <Chat />
        </div>
    );
};

export default Support;