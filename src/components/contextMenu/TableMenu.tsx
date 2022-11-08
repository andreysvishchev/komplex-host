import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../function/useOnClickOutside";
import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";
import {openConfidantModal, openConfirmModal} from "../../store/modalReducer";

type TableMenuPropsType = {
    name: string
    passport: string
    tel: string
    id: string
}

const TableMenu = (props: TableMenuPropsType) => {
    const [open, setOpen] = useState(false);
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useDispatch<AppDispatchType>()
    useOnClickOutside(ref, () => setOpen(false))

    const openConfidantModalHandler = () => {
        console.log(props.name)
        dispatch(openConfidantModal({
            open: true,
            title: 'Изменить доверенное лицо',
            name: props.name,
            passport: props.passport,
            tel: props.tel,
            id: props.id,
            newConfidant: false
        }))
    }
    const openConfirmModalHandler = ()=> dispatch(openConfirmModal({
        open: true,
        type: "confidant",
        messages: `Вы уверены, что хотите удалить доверенное лицо ${props.name} из таблицы?`,
        confidantData: {caption: props.name, id: props.id},
        deleteAll: false
    }))

    return (
        <div className={s.dots} ref={ref}>
            <button className={open ? `${s.dots__btn} ${s.isOpen} ${s.dark}` : `${s.dots__btn} ${s.dark}`} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={open ? `${s.dots__menu} ${s.isOpen}` : s.dots__menu}>
                <button onClick={openConfidantModalHandler} className={s.button}>Изменить</button>
                <button onClick={openConfirmModalHandler} className={s.button}>Удалить</button>
            </div>
        </div>

    );
};

export default TableMenu;



