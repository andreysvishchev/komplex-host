import React, {useState} from 'react';
import s from './Table.module.scss';
import EquipModal from "../../../modals/EquipModal";
import EquipItem from "./EquipItem";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {EquipType} from "../../../../reducers/equipReducer";



const EquipTable = () => {


    const table = useSelector<AppStateType, EquipType[]>(state => state.equips)


    return (

        <div className={s.wrap}>
            <div className={`${s.captions} ${s.equip}`}>
                <h6 className={s.caption}>Серийный номер</h6>
                <h6 className={s.caption}>Наименование оборудования</h6>
                <h6 className={s.caption}>Комментарий</h6>
            </div>
            {table.length !== 0 ?
                table.map(el => {
                    return (
                        <EquipItem
                            key={el.id}
                            id={el.id}
                            comment={el.comment}
                            name={el.name}
                            serialNumber={el.serialNumber}
                        />
                    )
                })
                : <div className={s.empty}>В таблице пока нет записей</div>
            }
        </div>
    );
};

export default EquipTable;