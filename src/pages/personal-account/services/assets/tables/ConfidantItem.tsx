import React from 'react';
import s from "./Table.module.scss";
import TableMenu from "../../../../components/contextMenu/TableMenu";

type PropsType = {
    id: string
    passport: string
    name: string
    tel: string
}

const ConfidantItem = (props: PropsType) => {
    return (
        <div className={`${s.row} ${s.confidant}`}  id={props.id}>
            <div className={s.col}>{props.name}</div>
            <div className={s.col}>{props.passport}</div>
            <div className={s.col}>{props.tel}</div>
            <TableMenu id={props.id} name={props.name} passport={props.passport} tel={props.tel}/>
        </div>
    );
};

export default ConfidantItem;