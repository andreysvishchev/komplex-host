import React, {useState} from 'react';
import s from "./Table.module.scss";
import EquipModal from "../../../modals/EquipModal";

type PropsType = {
    id: string
    serialNumber: number
    name: string
    comment: string
}

const EquipItem = (props: PropsType) => {
    const [open, setOpen] = useState<boolean>(false)
    const openEquipModal = ()=> {
        setOpen(true)
    }

    return (
        <div className={`${s.row} ${s.equip}`}>
            <div className={s.col}>{props.serialNumber}</div>
            <div className={s.col}>{props.name}</div>
            <div className={props.comment === '' ? `${s.coll} ${s.notfiled}` :s.coll}>
                <span> {props.comment === '' ? 'Редактировать' : props.comment}</span>
                <button onClick={openEquipModal} className={s.edit}/>
            </div>
            <EquipModal id={props.id} title={props.name} comment={props.comment} open={open} setOpen={setOpen}/>
        </div>
    );
};

export default EquipItem;