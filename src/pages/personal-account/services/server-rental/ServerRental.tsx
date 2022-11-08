import React from 'react';
import RentServerFrame from "../assets/frames/rent-server-frame/RentServerFrame";
import s from '../assets/frames/Frames.module.scss'
import Button from "../../../../components/button/Button";
import Tooltip from "../../../../components/tooltip/Tooltip";
import AddRentModal from "../../../../components/modals/AddRentModal";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../../../store/store";
import {openAddRentModal} from "../../../../store/modalReducer";

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
            <RentServerFrame/>
            <AddRentModal/>
        </div>
    );
};

export default ServerRental;