import React from 'react';
import {Box, Modal} from "@mui/material";
import {modal} from "../../style/style";
import s from "./Modal.module.scss";
import {AppDispatchType, useAppSelector} from "../../store/store";
import {useDispatch} from "react-redux";
import {openAddRentModal} from "../../reducers/modalReducer";
import {ServerItemType} from "../../reducers/rentBlockReducer";
import ServerItem from "../personal-account/services/assets/server-item/ServerItem";

const AddRentModal = () => {
    const open = useAppSelector<boolean>(state => state.modal.addRentModal)
    const servers = useAppSelector<ServerItemType[]>(state => state.rent.servers)
    const dispatch = useDispatch<AppDispatchType>()

    const handleClose = () => {
        dispatch(openAddRentModal(false))
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}>
            <Box sx={modal}>
                <div className={s.server}>
                    <button onClick={handleClose} className={s.close}/>
                    <div className={s.caption}>Подключить аренду сервера</div>
                    <div className={s.server__items}>
                        {servers.map(el => {
                            return (
                                <ServerItem
                                    key={el.id}
                                    id={el.id}
                                    number={el.number}
                                    cpu={el.cpu}
                                    ram={el.ram}
                                    hdd={el.hdd}
                                    ipmi={el.ipmi}
                                    price={el.price}/>
                            )
                        })}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default AddRentModal;