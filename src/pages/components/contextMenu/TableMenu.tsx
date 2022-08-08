import React, {MutableRefObject, useState} from 'react';
import s from './ContextMenu.module.scss'
import {useOnClickOutside} from "../../../function/useOnClickOutside";
import ConfidantModal from "../../modals/ConfidantModal";
import NoticeModal from "../../modals/NoticeModal";
import ConfirmModal from "../../modals/ConfirmModal";

type TableMenuPropsType = {
    name: string
    passport: string
    tel: string
    id: string
}

const TableMenu = (props: TableMenuPropsType) => {
    const [open, setOpen] = useState(false);
    const ref = React.useRef() as MutableRefObject<HTMLDivElement>
    const [openConfidantModal, setOpenConfidantModal] = React.useState(false);
    const [openConfirmModal, setOpenConfirmModal] = React.useState(false)

    const openConfidantModalHandler = () => setOpenConfidantModal(true);
    const openNoticeModalHandler = ()=> setOpenConfirmModal(true)

    useOnClickOutside(ref, () => setOpen(false))

    return (
        <div className={s.dots} ref={ref}>
            <button className={open ? `${s.dots__btn} ${s.isOpen} ${s.dark}` : `${s.dots__btn} ${s.dark}`} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </button>
            <div className={open ? `${s.dots__menu} ${s.isOpen}` : s.dots__menu}>
                <button onClick={openConfidantModalHandler} className={s.button}>Изменить</button>
                <button onClick={openNoticeModalHandler} className={s.button}>Удалить</button>
            </div>
            <ConfidantModal title={'Изменить доверенное лицо'}
                            open={openConfidantModal}
                            setOpen={setOpenConfidantModal}
                            name={props.name}
                            passport={props.passport}
                            tel={props.tel}
                            id={props.id}
            />
            <ConfirmModal messages={`Вы уверены, что хотите удалить доверенное лицо ${props.name} из таблицы?`}
                          deleteAll={false}
                          confidant={true}
                          confidantId={props.id}
                          confidantCaption={props.name}
                          open={openConfirmModal}
                          setOpen={setOpenConfirmModal}
            />
        </div>

    );
};

export default TableMenu;



