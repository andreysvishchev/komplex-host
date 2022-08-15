import React, {useEffect, useState} from 'react';
import Applications from "./applications/applications";
import Chat from "./chat/Chat";
import s from './Support.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../store/store";
import {ApplicationType, fetchSupportData} from "../../../reducers/supportReducer";
import NewApplication from "./new-application/NewApplication";


const Support = () => {
    const dispatch = useDispatch<AppDispatchType>()
    const applications = useSelector<AppStateType, ApplicationType[]>(state => state.support)
    const [id, setId] = useState<number>(0)

    useEffect(() => {
        dispatch(fetchSupportData())
    },[])

    useEffect(() => {
        if (applications.length !== 0) {
            setId(applications[0].id)
        }
    }, [])


    return (
        <div className={s.wrap}>
            <Applications applications={applications}
                          curApp={id}
                          setId={setId}/>
            {
                applications.length !== 0
                    ? <Chat applications={applications}
                            id={id}/>
                    : <NewApplication/>
            }
        </div>
    );
};

export default Support;