import React, {MutableRefObject, useState} from 'react';
import s from "./ContextMenu.module.scss";
import Configurator from "../modals/Configurator";
import {useOnClickOutside} from "../../function/useOnClickOutside";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {openConfigurator, openConfirmModal} from "../../store/modalReducer";

const RentMenu = () => {
    const [toggle, setToggle] = useState(false);
    const myRef = React.useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useDispatch<AppDispatchType>()

    useOnClickOutside(myRef, () => setToggle(false))

    const openConfirmModalHandler = () => dispatch(openConfirmModal({
        open: true,
        type: "rent",
        messages: 'Вы уверены, что хотите отключить услугу Аренда места?'
    }))

    const openConfiguratorHandler = () => {
      dispatch(openConfigurator(true))
    }

    return (
        <div className={s.wrap} ref={myRef}>
            <button
                className={toggle ? `${s.dark} ${s.isOpen} ${s.burger}` : `${s.dark} ${s.burger}`}
                onClick={() => setToggle(!toggle)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={toggle ? `${s.menu} ${s.isOpen}` : s.menu}>
                <button onClick={openConfiguratorHandler} className={s.button}>Изменить
                </button>
                <button onClick={openConfirmModalHandler} className={s.button}>Отключить
                </button>
            </div>
            <Configurator/>
        </div>
    );
};

export default RentMenu;