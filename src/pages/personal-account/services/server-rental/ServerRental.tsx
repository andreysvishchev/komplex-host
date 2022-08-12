import React from 'react';
import ServerBlock from "../assets/info-blocks/ServerBlock";
import s from '../assets/info-blocks/InfoBlock.module.scss'
import Button from "../../../components/button/Button";
import Tooltip from "../../../components/tooltip/Tooltip";
import AddRentModal from "../../../modals/AddRentModal";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../store/store";
import {openAddRentModal} from "../../../../reducers/modalReducer";

const ServerRental = () => {
    const dispatch = useDispatch<AppDispatchType>()

    const openModal = () => {
        dispatch(openAddRentModal(true))
    }
    return (
        <div>
            <div className={s.wrap}>
                <div className={`${s.top} ${s.zero}`}>
                    <div className={s.col}>
                        <div className={s.caption}>Аренда сервера</div>
                        <Tooltip/>
                    </div>
                    <Button callBack={openModal} type={'button'} title={'Добавить +'}/>
                </div>
            </div>
            <ServerBlock/>
            <AddRentModal/>
        </div>
    );
};

export default ServerRental;