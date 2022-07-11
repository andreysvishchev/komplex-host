import React, {useState} from 'react';
import s from './Table.module.scss';
import EquipModal from "../../../modals/EquipModal";
import EquipItem from "./EquipItem";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {EquipType} from "../../../../reducers/equipReducer";
import Pagination from "../pagination/Pagination";


const EquipTable = () => {
    let data = useSelector<AppStateType, EquipType[]>(state => state.equips)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const itemsAmount = data.length
    const maxPage = Math.ceil(data.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    data = data.slice(firstItemIndex, lastItemIndex)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)


    return (
        <>
            <div className={s.wrap}>
                <div className={`${s.captions} ${s.equip}`}>
                    <h6 className={s.caption}>Серийный номер</h6>
                    <h6 className={s.caption}>Наименование оборудования</h6>
                    <h6 className={s.caption}>Комментарий</h6>
                </div>
                {data.length !== 0 ?
                    data.map(el => {
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
            <Pagination currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsAmount={itemsAmount}
                        setItemsPerPage={setItemsPerPage}
                        maxPage={maxPage}
                        nextPage={nextPage}
                        prevPage={prevPage}
            />
        </>

    );
};

export default EquipTable;