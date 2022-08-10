import React, {useEffect, useState} from 'react';
import s from "./InfoBlock.module.scss";
import Search from "../../../../components/search/Search";
import EquipTable from "../tables/EquipTable";
import Tooltip from "../../../../components/tooltip/Tooltip";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../../../../store/store";
import {EquipType, fetchEquips} from "../../../../../reducers/equipReducer";
import {Pagination} from "../../../../../function/pagination";


const EquipBlock = () => {
    useEffect(() => {
        dispatch(fetchEquips())
    }, [])

    let data = useAppSelector<EquipType[]>(state => state.equips)
    let tableStatus = 'В таблице пока нет записей'
    const dispatch = useDispatch<AppDispatchType>()
    const [value, setValue] = useState('')

    data = data.filter(el => {
        if (el.name.toLowerCase().includes(value.toLowerCase())) {
            return el.name.toLowerCase().includes(value.toLowerCase())
        } else {
            tableStatus = 'Поиск не дал результатов'
        }
    })

    const {
        data: newData,
        prevPage,
        nextPage,
        itemsAmount,
        maxPage,
        lastItemIndex,
        firstItemIndex,
        setCurrentPage,
        currentPage,
        setItemsPerPage
    } = Pagination(data, 4)


    return (
        <div className={s.wrap}>
            <div className={s.top}>
                <div className={s.col}>
                    <h4 className={s.caption}>Оборудование</h4>
                    <Tooltip/>
                    <Search value={value} setValue={setValue} prevPage={setCurrentPage}/>
                </div>
            </div>
            <EquipTable
                tableStatus={tableStatus}
                data={newData}
                lastIndex={lastItemIndex}
                firstIndex={firstItemIndex}
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
                itemsAmount={itemsAmount}
                nextPage={nextPage}
                prevPage={prevPage}/>
        </div>
    );
};

export default EquipBlock;